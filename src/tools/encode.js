/**
 * 编码与解码组工具：Base64/图片、Unicode、乱码反解、进制、Hex、JWT、Gzip、
 * Punycode、Quoted-Printable、Base16/32/58/62/85。
 */
import {
  actionOption, bytesToHex, hexToBytes, utf8Encode, utf8Decode, bytesToB64, b64ToBytes, lines,
} from '../shared.js';

/* ---------------- Base64 ---------------- */

const b64Encode = (text, urlSafe) => {
  let out = bytesToB64(utf8Encode(text));
  if (urlSafe) out = out.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
  return out;
};

const b64Decode = (text) => {
  let s = text.trim().replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  try {
    return utf8Decode(b64ToBytes(s));
  } catch {
    throw new Error('Base64 解码失败：内容不是合法的 Base64');
  }
};

const base64Tool = {
  id: 'enc-base64',
  group: 'encode',
  title: 'Base64 编码/解码',
  desc: 'UTF-8 安全的 Base64 编码与解码',
  sample: '深研君，你好 toolbox！',
  options: [
    actionOption('encode', [
      { value: 'encode', label: '编码' },
      { value: 'decode', label: '解码' },
    ]),
    { key: 'urlsafe', label: 'URL 安全', type: 'switch', default: false },
  ],
  run(input, o) {
    return o.action === 'encode' ? b64Encode(input, o.urlsafe) : b64Decode(input);
  },
};

const b64ImageTool = {
  id: 'enc-base64-image',
  group: 'encode',
  title: 'Base64 与图片转换',
  desc: '图片文件 ↔ Base64 Data URL（本地读取，不上传）',
  sample: '',
  custom: 'b64-image',
  options: [],
  run() {
    return ''; // 由 UI 的 custom 渲染器接管
  },
};

/* ---------------- Unicode 与中文 ---------------- */

const unicodeTool = {
  id: 'enc-unicode',
  group: 'encode',
  title: 'Unicode 与中文互转',
  desc: '中文 ↔ \\uXXXX 转义（支持代理对）',
  sample: '深研君 DeepSeek',
  options: [
    actionOption('encode', [
      { value: 'encode', label: '中文 → \\u' },
      { value: 'decode', label: '\\u → 中文' },
    ]),
    { key: 'ascii', label: '保留 ASCII', type: 'switch', default: true },
  ],
  run(input, o) {
    if (o.action === 'encode') {
      let out = '';
      for (const ch of input) {
        const cp = ch.codePointAt(0);
        if (o.ascii && cp < 128) out += ch;
        else out += `\\u${cp.toString(16).padStart(4, '0')}`;
      }
      return out;
    }
    return input.replace(/\\u\{([0-9a-fA-F]+)\}|\\u([0-9a-fA-F]{4})/g, (_, br, plain) =>
      String.fromCodePoint(parseInt(br || plain, 16)));
  },
};

/* ---------------- 乱码反解（字符编码探测） ---------------- */

const DECODE_TARGETS = ['utf-8', 'gbk', 'gb18030', 'big5', 'windows-1252', 'shift_jis', 'euc-kr', 'iso-8859-1'];

const mojibakeTool = {
  id: 'enc-mojibake',
  group: 'encode',
  title: '乱码反解',
  desc: '用多种编码逐一尝试解码，找出正确原文（如 GBK 被当 Latin-1 显示）',
  sample: 'ÉîÑÐ¾ý ÄãºÃ',
  options: [],
  run(input) {
    if (!input.trim()) throw new Error('请输入乱码文本');
    const rows = [];
    // 1) 直接按各编码解码（针对 latin1 化的乱码，先还原字节）
    const bytes = utf8Encode(input.normalize('NFC'));
    const latinBytes = new Uint8Array(input.length);
    let hasNonLatin = false;
    for (let i = 0; i < input.length; i++) {
      const c = input.charCodeAt(i);
      if (c > 0xff) hasNonLatin = true;
      latinBytes[i] = c & 0xff;
    }
    for (const enc of DECODE_TARGETS) {
      try {
        const direct = new TextDecoder(enc).decode(latinBytes);
        const round = utf8Encode(direct);
        rows.push({ enc, text: direct, score: scoreText(direct) });
      } catch { /* 编码不可用则跳过 */ }
    }
    // 2) 也给出按 UTF-8 直接解码原文的参照
    try {
      const asUtf8 = utf8Decode(latinBytes);
      rows.push({ enc: 'latin1→utf-8', text: asUtf8, score: scoreText(asUtf8) });
    } catch { /* ignore */ }
    rows.sort((a, b) => b.score - a.score);
    return rows
      .map((r) => `[${r.enc}] (可读度 ${r.score})\n${r.text}`)
      .join('\n\n');
  },
};

/** 极简可读度：CJK/常见 ASCII 占比高者得分高 */
function scoreText(s) {
  if (!s) return 0;
  let good = 0;
  for (const ch of s) {
    const cp = ch.codePointAt(0);
    if ((cp >= 0x4e00 && cp <= 0x9fff) || (cp >= 0x20 && cp < 0x7f) || (cp >= 0x3000 && cp <= 0x303f) || (cp >= 0xff00 && cp <= 0xffef)) good++;
  }
  return Math.round((good / [...s].length) * 100);
}

/* ---------------- 进制转换 ---------------- */

const radixTool = {
  id: 'enc-radix',
  group: 'encode',
  title: '进制转换（BigInt）',
  desc: '2~36 进制任意互转，支持超大整数',
  sample: '12345678901234567890',
  options: [
    { key: 'from', label: '输入进制', type: 'segment', default: '10', options: [2, 8, 10, 16].map((v) => ({ value: String(v), label: String(v) })) },
    { key: 'to', label: '输出进制', type: 'segment', default: '16', options: [2, 8, 10, 16].map((v) => ({ value: String(v), label: String(v) })) },
    { key: 'mode', label: '模式', type: 'segment', default: 'uint', options: [
      { value: 'uint', label: '无符号' },
      { value: 'int', label: '有符号补码' },
      { value: 'bytes', label: '单字节' },
    ] },
    { key: 'bits', label: '位宽', type: 'segment', default: '64', options: ['8', '16', '32', '64'].map((v) => ({ value: v, label: v })) },
  ],
  run(input, o) {
    const from = Number(o.from);
    const to = Number(o.to);
    if (o.mode === 'bytes') {
      // 单字节：每行一个值，输出各进制
      const n = Number(input.trim());
      if (!Number.isInteger(n) || n < 0 || n > 255) throw new Error('单字节模式需输入 0~255 整数');
      return [2, 8, 10, 16].map((r) => `base${r}: ${n.toString(r)}`).join('\n');
    }
    const clean = input.trim().replace(/^0[xbo]/i, '');
    let value;
    try {
      value = BigInt(from === 10 ? clean.replace(/[^0-9-]/g, '') || '0' : strToBigInt(clean, from));
    } catch {
      throw new Error(`「${clean}」不是合法的 ${from} 进制数`);
    }
    let out = value;
    if (o.mode === 'int') {
      const bits = Number(o.bits);
      const mod = 1n << BigInt(bits);
      out = ((value % mod) + mod) % mod; // 转无符号补码位型
      if (value < 0n || out >= mod / 2n) {
        const signed = out >= mod / 2n ? out - mod : out;
        return `hex : 0x${out.toString(16)}\ndec : ${signed}\nbin : ${padBin(out.toString(2), bits)}`;
      }
    }
    return `hex : 0x${(out < 0n ? -out : out).toString(16)}${out < 0n ? ' (-)' : ''}\ndec : ${out}\nbin : ${out < 0n ? '-' : ''}${padBin((out < 0n ? -out : out).toString(2), 64)}`;
    function padBin(s, width) {
      return s.length > width ? s : s.padStart(width, '0').replace(/(.{4})(?=.)/g, '$1 ');
    }
    function strToBigInt(s, radix) {
      const digits = '0123456789abcdefghijklmnopqrstuvwxyz';
      let neg = false;
      s = s.toLowerCase().replace(/^[+-]/, (m) => ((neg = m === '-'), ''));
      let acc = 0n;
      const R = BigInt(radix);
      for (const ch of s) {
        const d = digits.indexOf(ch);
        if (d < 0 || d >= radix) throw new Error('bad digit');
        acc = acc * R + BigInt(d);
      }
      return neg ? -acc : acc;
    }
  },
};

/* ---------------- 大小端 / 字节序 ---------------- */

const endianTool = {
  id: 'enc-endian',
  group: 'encode',
  title: '大小端转换',
  desc: '数值 ↔ 指定字节序的十六进制字节',
  sample: '0x12345678',
  options: [
    { key: 'type', label: '类型', type: 'segment', default: 'u32', options: [
      { value: 'u16', label: 'UInt16' },
      { value: 'u32', label: 'UInt32' },
      { value: 'f32', label: 'Float32' },
      { value: 'f64', label: 'Float64' },
    ] },
    { key: 'endian', label: '字节序', type: 'segment', default: 'little', options: [
      { value: 'little', label: 'Little' },
      { value: 'big', label: 'Big' },
    ] },
  ],
  run(input, o) {
    const sizes = { u16: 2, u32: 4, f32: 4, f64: 8 };
    const size = sizes[o.type];
    let hex = input.trim().replace(/^0x/i, '').replace(/\s+/g, '');
    if (!/^[0-9a-fA-F]+$/.test(hex) || hex.length === 0 || hex.length > size * 2) {
      throw new Error(`请输入最多 ${size * 2} 位十六进制`);
    }
    hex = hex.padStart(size * 2, '0');
    const bytes = hexToBytes(hex);
    const buf = new ArrayBuffer(size);
    const view = new DataView(buf);
    for (let i = 0; i < size; i++) view.setUint8(i, bytes[i]);
    const read = o.type === 'f32' ? view.getFloat32(0, o.endian === 'little')
      : o.type === 'f64' ? view.getFloat64(0, o.endian === 'little')
        : o.type === 'u16' ? view.getUint16(0, o.endian === 'little')
          : view.getUint32(0, o.endian === 'little');
    // 同时给出另一端结果，便于对照
    const other = o.endian === 'little' ? 'big' : 'little';
    const readOther = o.type === 'f32' ? view.getFloat32(0, other === 'little')
      : o.type === 'f64' ? view.getFloat64(0, other === 'little')
        : o.type === 'u16' ? view.getUint16(0, other === 'little')
          : view.getUint32(0, other === 'little');
    const fmt = (v) => (o.type.startsWith('u') ? `0x${BigInt(v).toString(16).toUpperCase()}` : String(v));
    return `输入字节  : ${bytesToHex(bytes, ' ')}\n${o.endian} → 数值: ${fmt(read)}\n${other} → 数值: ${fmt(readOther)}\n字节数    : ${size}`;
  },
};

/* ---------------- 文本与 Hex ---------------- */

const hexTool = {
  id: 'enc-hex',
  group: 'encode',
  title: '文本与 Hex 转换',
  desc: 'UTF-8 字节与十六进制互转',
  sample: '深研君',
  options: [
    actionOption('encode', [
      { value: 'encode', label: '文本 → Hex' },
      { value: 'decode', label: 'Hex → 文本' },
    ]),
    { key: 'sep', label: '分隔', type: 'segment', default: 'space', options: [
      { value: 'space', label: '空格' },
      { value: 'none', label: '无' },
      { value: 'comma', label: '逗号' },
    ] },
  ],
  run(input, o) {
    if (o.action === 'encode') {
      return bytesToHex(utf8Encode(input), o.sep === 'space' ? ' ' : o.sep === 'comma' ? ',' : '');
    }
    const bytes = hexToBytes(input);
    return utf8Decode(bytes);
  },
};

/* ---------------- JWT ---------------- */

function b64urlDecode(part) {
  let s = part.replace(/-/g, '+').replace(/_/g, '/');
  while (s.length % 4) s += '=';
  return utf8Decode(b64ToBytes(s));
}

const jwtTool = {
  id: 'enc-jwt',
  group: 'encode',
  title: 'JWT 解析',
  desc: '解析 JWT header/payload，校验过期时间与 HMAC 签名',
  sample: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IuacrOaWh-acnyIsImlhdCI6MTcwMDAwMDAwMH0.dummy_signature',
  options: [
    { key: 'secret', label: 'HMAC 密钥（可选）', type: 'text', default: '', placeholder: '填写后验签' },
  ],
  run(input, o) {
    const parts = input.trim().split('.');
    if (parts.length < 2) throw new Error('JWT 需包含 header.payload（.signature 可选）');
    let header;
    let payload;
    try {
      header = JSON.parse(b64urlDecode(parts[0]));
      payload = JSON.parse(b64urlDecode(parts[1]));
    } catch (e) {
      throw new Error(`JWT 解码失败：${e.message}`);
    }
    const rows = [];
    rows.push(`── header ──\n${JSON.stringify(header, null, 2)}`);
    rows.push(`── payload ──\n${JSON.stringify(payload, null, 2)}`);
    const now = Math.floor(Date.now() / 1000);
    const timeRows = [];
    for (const k of ['iat', 'exp', 'nbf']) {
      if (payload[k]) {
        const d = new Date(payload[k] * 1000);
        const rel = k === 'exp'
          ? (payload[k] > now ? `（${Math.round((payload[k] - now) / 60)} 分钟后过期）` : '（已过期）')
          : `（${Math.round((now - payload[k]) / 86400)} 天前）`;
        timeRows.push(`${k}: ${d.toLocaleString()} ${rel}`);
      }
    }
    if (timeRows.length) rows.push(`── 时间 ──\n${timeRows.join('\n')}`);
    if (parts[2] && o.secret) {
      // HMAC-SHA256 验签
      return (async () => {
        const enc = new TextEncoder();
        const key = await crypto.subtle.importKey('raw', enc.encode(o.secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
        const sig = new Uint8Array(await crypto.subtle.sign('HMAC', key, enc.encode(`${parts[0]}.${parts[1]}`)));
        const expect = bytesToB64(sig).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
        rows.push(`── 签名验证 (HS256) ──\n${expect === parts[2] ? '✅ 签名匹配' : `❌ 签名不匹配\n期望: ${expect}\n实际: ${parts[2]}`}`);
        return rows.join('\n\n');
      })();
    }
    return rows.join('\n\n');
  },
};

/* ---------------- Gzip / Zlib ---------------- */

const gzipTool = {
  id: 'enc-gzip',
  group: 'encode',
  title: 'Gzip / Deflate 压缩',
  desc: '文本压缩为 Base64，或从 Base64 解压（CompressionStream）',
  sample: 'compress me compress me compress me compress me',
  options: [
    actionOption('compress', [
      { value: 'compress', label: '压缩' },
      { value: 'decompress', label: '解压' },
    ]),
    { key: 'format', label: '格式', type: 'segment', default: 'gzip', options: [
      { value: 'gzip', label: 'gzip' },
      { value: 'deflate', label: 'zlib' },
      { value: 'deflate-raw', label: 'raw' },
    ] },
  ],
  async run(input, o) {
    if (!input.trim()) throw new Error('请输入内容');
    if (o.action === 'compress') {
      const cs = new CompressionStream(o.format);
      const stream = new Blob([utf8Encode(input)]).stream().pipeThrough(cs);
      const buf = new Uint8Array(await new Response(stream).arrayBuffer());
      return bytesToB64(buf);
    }
    const bytes = (() => {
      try { return b64ToBytes(input); } catch { throw new Error('请输入 Base64 编码的压缩数据'); }
    })();
    const ds = new DecompressionStream(o.format);
    const stream = new Blob([bytes]).stream().pipeThrough(ds);
    const text = await new Response(stream).text();
    return text;
  },
};

/* ---------------- Punycode / IDN ---------------- */

const punycodeTool = {
  id: 'enc-punycode',
  group: 'encode',
  title: 'Punycode / IDN 转换',
  desc: '中文域名 ↔ xn-- Punycode',
  sample: '深研. example.com',
  options: [
    actionOption('encode', [
      { value: 'encode', label: '域名 → Punycode' },
      { value: 'decode', label: 'Punycode → 域名' },
    ]),
  ],
  run(input, o) {
    const parts = input.trim().split(/\s+/).flatMap((p) => p.split('.'));
    // 使用 URL 解析能力间接转换
    if (o.action === 'encode') {
      const host = input.trim().replace(/\s+/g, '');
      const u = new URL(`http://${host}`);
      return u.hostname;
    }
    const host = input.trim().replace(/\s+/g, '');
    const u = new URL(`http://${host}`);
    // 反向：构造一个以 xn-- 开头的 hostname，浏览器 URL 不做反解，需自行处理
    return u.hostname.split('.').map((label) => {
      if (!label.startsWith('xn--')) return label;
      try {
        // punycode 解码
        return punyDecode(label.slice(4));
      } catch {
        return label;
      }
    }).join('.');
    function punyDecode(input) {
      const BASE = 36; const TMIN = 1; const TMAX = 26; const SKEW = 38; const DAMP = 700;
      const INITIAL_BIAS = 72; const INITIAL_N = 128n;
      const handled = input.lastIndexOf('-');
      let output = handled > 0 ? [...input.slice(0, handled)].map((c) => c.codePointAt(0)) : [];
      let i = 0n; let bias = INITIAL_BIAS; let n = INITIAL_N;
      let idx = handled + 1;
      const digitToVal = (cp) => {
        if (cp >= 65 && cp <= 90) return cp - 65;
        if (cp >= 97 && cp <= 122) return cp - 97;
        if (cp >= 48 && cp <= 57) return cp - 48 + 26;
        return -1;
      };
      const adapt = (delta, num) => {
        delta = num === 1 ? Math.floor(delta / DAMP) : delta >> 1;
        delta += Math.floor(delta / num);
        let k = 0;
        while (delta > ((36 - TMIN) * TMAX) / 2) { delta = Math.floor(delta / (36 - TMIN)); k += TMIN; }
        return k + Math.floor(((36 - TMIN + 1) * delta) / (delta + SKEW));
      };
      while (idx < input.length) {
        const oldi = i; let w = 1;
        for (let k = BASE; ; k += BASE) {
          if (idx >= input.length) throw new Error('bad');
          const d = digitToVal(input.charCodeAt(idx++));
          if (d < 0) throw new Error('bad');
          i += BigInt(d) * BigInt(w);
          const t = k <= bias ? TMIN : k >= bias + TMAX ? TMAX : k - bias;
          if (d < t) break;
          w *= (BASE - t);
        }
        bias = adapt(Number(i - oldi), output.length + 1);
        n += i / BigInt(output.length + 1);
        i %= BigInt(output.length + 1);
        output.splice(Number(i), 0, Number(n));
        i += 1n;
      }
      return String.fromCodePoint(...output);
    }
  },
};

/* ---------------- Quoted-Printable ---------------- */

const qpTool = {
  id: 'enc-qp',
  group: 'encode',
  title: 'Quoted-Printable 编码/解码',
  desc: '邮件正文用的 =XX 转义编码',
  sample: '深研君 hello',
  options: [
    actionOption('encode', [
      { value: 'encode', label: '编码' },
      { value: 'decode', label: '解码' },
    ]),
  ],
  run(input, o) {
    if (o.action === 'encode') {
      const bytes = utf8Encode(input);
      let out = '';
      let lineLen = 0;
      for (const b of bytes) {
        let tok;
        if (b === 0x0a) { out += '\n'; lineLen = 0; continue; }
        if ((b >= 33 && b <= 126 && b !== 61) || b === 32 || b === 9) tok = String.fromCharCode(b);
        else tok = `=${b.toString(16).toUpperCase().padStart(2, '0')}`;
        if (lineLen + tok.length > 75) { out += '=\n'; lineLen = 0; }
        out += tok; lineLen += tok.length;
      }
      return out;
    }
    const bytes = [];
    const src = input.replace(/=\n/g, '').replace(/=\r\n/g, '');
    for (let i = 0; i < src.length; i++) {
      const c = src[i];
      if (c === '=' && i + 2 < src.length && /^[0-9a-fA-F]{2}$/.test(src.slice(i + 1, i + 3))) {
        bytes.push(parseInt(src.slice(i + 1, i + 3), 16));
        i += 2;
      } else {
        bytes.push(c.charCodeAt(0));
      }
    }
    return utf8Decode(new Uint8Array(bytes));
  },
};

/* ---------------- Base16/32/58/62/85 ---------------- */

const B58_ALPHABET = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
const B62_ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const B32_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';

const multiBaseTool = {
  id: 'enc-multibase',
  group: 'encode',
  title: 'Base16/32/58/62 编码',
  desc: '多种 Base-N 编码（Base85 见下方独立工具）',
  sample: 'toolbox',
  options: [
    { key: 'base', label: '编码', type: 'segment', default: '58', options: [
      { value: '16', label: 'Base16' },
      { value: '32', label: 'Base32' },
      { value: '58', label: 'Base58' },
      { value: '62', label: 'Base62' },
    ] },
    actionOption('encode', [
      { value: 'encode', label: '编码' },
      { value: 'decode', label: '解码' },
    ]),
  ],
  run(input, o) {
    const N = o.base;
    if (N === '16') {
      return o.action === 'encode' ? bytesToHex(utf8Encode(input)) : utf8Decode(hexToBytes(input));
    }
    if (N === '32') {
      if (o.action === 'encode') {
        const bytes = utf8Encode(input);
        let bits = 0; let value = 0; let out = '';
        for (const b of bytes) {
          value = (value << 8) | b; bits += 8;
          while (bits >= 5) { out += B32_ALPHABET[(value >>> (bits - 5)) & 31]; bits -= 5; }
        }
        if (bits > 0) out += B32_ALPHABET[(value << (5 - bits)) & 31];
        return out;
      }
      const clean = input.toUpperCase().replace(/[^A-Z2-7]/g, '').replace(/=+$/, '');
      let bits = 0; let value = 0; const bytes = [];
      for (const ch of clean) {
        const v = B32_ALPHABET.indexOf(ch);
        if (v < 0) continue;
        value = (value << 5) | v; bits += 5;
        if (bits >= 8) { bytes.push((value >>> (bits - 8)) & 0xff); bits -= 8; }
      }
      return utf8Decode(new Uint8Array(bytes));
    }
    // Base58 / Base62：大整数法
    const ALPHABET = N === '58' ? B58_ALPHABET : B62_ALPHABET;
    if (o.action === 'encode') {
      const bytes = utf8Encode(input);
      // 前导 0 处理（Base58 惯例：每个 0 字节 → '1'）
      if (N === '58') {
        let zeros = 0;
        while (zeros < bytes.length && bytes[zeros] === 0) zeros++;
        let num = 0n;
        for (const b of bytes) num = (num << 8n) | BigInt(b);
        let out = '';
        while (num > 0n) { out = ALPHABET[Number(num % 58n)] + out; num /= 58n; }
        return '1'.repeat(zeros) + (out || '');
      }
      // Base62 整数法（把整段字节当大数）
      let num = 0n;
      for (const b of bytes) num = (num << 8n) | BigInt(b);
      let out = '';
      const R = 62n;
      while (num > 0n) { out = ALPHABET[Number(num % R)] + out; num /= R; }
      return out || ALPHABET[0];
    }
    // decode
    const digits = [...input].map((ch) => {
      const d = ALPHABET.indexOf(ch);
      if (d < 0) throw new Error(`字符「${ch}」不在 Base${N} 字母表中`);
      return d;
    });
    let num = 0n;
    const R = BigInt(N);
    for (const d of digits) num = num * R + BigInt(d);
    const hex = num.toString(16).padStart(num.toString(16).length % 2 ? 1 : 0, '0');
    let byteLen = Math.ceil(num.toString(16).length / 2);
    if (N === '58') {
      let zeros = 0;
      while (zeros < input.length && input[zeros] === '1') zeros++;
      const body = bytesOf(num);
      return utf8Decode(new Uint8Array([...new Array(zeros).fill(0), ...body]));
    }
    return utf8Decode(new Uint8Array(bytesOf(num)));
    function bytesOf(n) {
      const hexs = n.toString(16);
      const even = hexs.length % 2 ? `0${hexs}` : hexs;
      const out = [];
      for (let i = 0; i < even.length; i += 2) out.push(parseInt(even.slice(i, i + 2), 16));
      return out;
    }
  },
};

/* ---------------- Base85 / ASCII85 ---------------- */

const B85_ALPHABET = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+-;<=>?@^_`{|}~';

const base85Tool = {
  id: 'enc-base85',
  group: 'encode',
  title: 'Base85 / ASCII85 编码',
  desc: 'Z85 变体 Base85 编码与解码',
  sample: 'toolbox',
  options: [
    actionOption('encode', [
      { value: 'encode', label: '编码' },
      { value: 'decode', label: '解码' },
    ]),
  ],
  run(input, o) {
    if (o.action === 'encode') {
      // ASCII85：4 字节组 → 5 字符（85^5 > 2^32，无溢出）；输入补零到 4 的倍数
      const bytes = utf8Encode(input);
      const padN = (4 - (bytes.length % 4)) % 4;
      const padded = new Uint8Array(bytes.length + padN);
      padded.set(bytes);
      let out = '';
      for (let i = 0; i < padded.length; i += 4) {
        let num = 0n;
        for (let j = 0; j < 4; j++) num = (num << 8n) | BigInt(padded[i + j]);
        const cs = [];
        for (let j = 4; j >= 0; j--) { cs[j] = B85_ALPHABET[Number(num % 85n)]; num /= 85n; }
        out += cs.join('');
      }
      return out;
    }
    const clean = input.replace(/\s+/g, '');
    if (!clean.length || clean.length % 5) throw new Error('Base85 编码长度需为 5 的倍数');
    const bytes = [];
    for (let i = 0; i < clean.length; i += 5) {
      let num = 0n;
      for (const ch of clean.slice(i, i + 5)) {
        const d = B85_ALPHABET.indexOf(ch);
        if (d < 0) throw new Error(`字符「${ch}」不在 Base85 字母表中`);
        num = num * 85n + BigInt(d);
      }
      if (num > 0xffffffffn) throw new Error('Base85 数据越界');
      const group = [0, 0, 0, 0];
      for (let j = 3; j >= 0; j--) { group[j] = Number(num & 0xffn); num >>= 8n; }
      bytes.push(...group);
    }
    // 编码时输入补零到 4 的倍数，解码后去掉尾部补零
    while (bytes.length && bytes[bytes.length - 1] === 0) bytes.pop();
    return utf8Decode(new Uint8Array(bytes));
  },
};

/* ---------------- 字节数组工具 ---------------- */

const byteArrayTool = {
  id: 'enc-byte-array',
  group: 'encode',
  title: '字节数组有/无符号互转',
  desc: '有符号 (-128~127) ↔ 无符号 (0~255) 字节序列转换',
  sample: '-1, 0, 127, -128',
  options: [
    actionOption('toU', [
      { value: 'toU', label: '有符号 → 无符号' },
      { value: 'toS', label: '无符号 → 有符号' },
    ]),
  ],
  run(input, o) {
    const nums = input.split(/[\s,;]+/).filter(Boolean).map(Number);
    if (nums.some((n) => !Number.isInteger(n))) throw new Error('只接受整数，逗号或空白分隔');
    const bad = nums.find((n) => n < (o.action === 'toU' ? -128 : 0) || n > (o.action === 'toU' ? 127 : 255));
    if (bad !== undefined) throw new Error(`数值越界：${bad}`);
    const out = nums.map((n) => (o.action === 'toU' ? (n < 0 ? n + 256 : n) : n > 127 ? n - 256 : n));
    return out.join(', ');
  },
};

/* ---------------- 导出 ---------------- */

export const ENCODE_TOOLS = [
  base64Tool,
  b64ImageTool,
  unicodeTool,
  mojibakeTool,
  radixTool,
  endianTool,
  hexTool,
  jwtTool,
  gzipTool,
  punycodeTool,
  qpTool,
  multiBaseTool,
  base85Tool,
  byteArrayTool,
];
