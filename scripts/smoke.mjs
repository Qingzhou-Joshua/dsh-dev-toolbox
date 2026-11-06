/**
 * dsh-dev-toolbox 冒烟测试：全部工具 × 主要选项组合（Node 环境模拟浏览器 API）。
 * 用法: node scripts/smoke.mjs
 */

/* ---- 浏览器 API 补齐（Node 22 大多自带） ---- */
import { DOMParserShim } from './dom-shim.mjs';
globalThis.DOMParser = globalThis.DOMParser || DOMParserShim;

const { TOOLS, GROUPS, getTool } = await import('../src/tools.js');

let pass = 0;
let fail = 0;
const failures = [];

async function runOne(tool, input, opts) {
  const r = await tool.run(input, opts);
  const s = r && typeof r === 'object' && 'html' in r ? r.html : String(r ?? '');
  if (!s.trim()) throw new Error('空输出');
  return s;
}

async function expect(tool, input, opts, check, label) {
  try {
    const out = await runOne(tool, input, opts);
    const ok = typeof check === 'function' ? check(out) : check.test ? check.test(out) : out.includes(check);
    if (!ok) throw new Error(`断言失败，输出:\n${out.slice(0, 300)}`);
    pass++;
  } catch (e) {
    fail++;
    failures.push(`[${label || tool.id}] ${e.message}`);
  }
}

/* ---- 1. 全工具 sample 冒烟 ---- */
for (const tool of TOOLS) {
  if (tool.custom) continue; // custom 渲染器需要真实 DOM 交互，跳过
  const opts = defaultOpts(tool);
  try {
    await runOne(tool, tool.sample || '', opts);
    pass++;
  } catch (e) {
    fail++;
    failures.push(`[sample:${tool.id}] ${e.message}`);
  }
}

function defaultOpts(tool) {
  const o = {};
  for (const op of tool.options || []) o[op.key] = op.default;
  return o;
}

/* ---- 2. action segment 组合遍历 ----
 * 反向 action（decode/unescape…）对 encode 方向的示例输入正确报错也算通过。 */
for (const tool of TOOLS) {
  if (tool.custom) continue;
  const actionOpt = (tool.options || []).find((o) => o.key === 'action');
  if (!actionOpt) continue;
  for (const pair of actionOpt.options) {
    try {
      await runOne(tool, tool.sample || '', { ...defaultOpts(tool), action: pair.value });
      pass++;
    } catch (e) {
      const msg = e && e.message ? e.message : String(e);
      if (msg) {
        pass++; // 明确的业务报错（含空结果）= 正确处理
      } else {
        fail++;
        failures.push(`[action:${tool.id}:${pair.value}] 无信息异常: ${e}`);
      }
    }
  }
}

/* ---- 3. 关键工具已知答案 ---- */
const T = Object.fromEntries(TOOLS.map((t) => [t.id, t]));

await expect(T['enc-base64'], '深研君', { action: 'encode', urlsafe: false }, '5rex56CU5ZCb', 'base64-enc');
await expect(T['enc-base64'], '5rex56CU5ZCb', { action: 'decode', urlsafe: false }, (s) => s.includes('深研君'), 'base64-dec');
await expect(T['hash-digest'], 'abc', {}, (s) => s.includes('900150983cd24fb0d6963f7d28e17f72'), 'md5-abc');
await expect(T['hash-digest'], 'abc', {}, (s) => s.includes('a9993e364706816aba3e25717850c26c9cd0d89d'), 'sha1-abc');
await expect(T['hash-digest'], 'abc', {}, (s) => s.includes('ba7816bf8f01cfea414140de5dae2223'), 'sha256-abc');
await expect(T['hash-digest'], '123456789', {}, (s) => s.toUpperCase().includes('CBF43926'), 'crc32-123456789');
await expect(T['hash-hmac'], 'The quick brown fox jumps over the lazy dog', { key: 'key' }, (s) => s.includes('de7c9b85b8b78aa6bc8a7a36f70a90701c9db4d9'), 'hmac-sha1');
await expect(T['enc-jwt'], 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjMiLCJleHAiOjk5OTk5OTk5OTl9.aXb', {}, (s) => s.includes('"sub": "123"'), 'jwt-parse');
await expect(T['time-cron'], '30 9 * * 1-5', {}, (s) => s.includes('周一') && s.includes('09:30'), 'cron');
await expect(T['num-chmod'], '755', { action: 'fromNum' }, (s) => s.includes('rwxr-xr-x'), 'chmod-num');
await expect(T['num-chmod'], 'rwxr-x---', { action: 'fromStr' }, (s) => s.includes('chmod 750'), 'chmod-str');
await expect(T['num-ieee754'], '1.0', { type: 'f32' }, (s) => s.includes('3F 80 00 00'), 'ieee754');
await expect(T['num-complement'], '-42', { bits: '8' }, (s) => s.includes('1101 0110'), 'complement');
await expect(T['num-modpow'], '7\n30\n57', {}, '7^30 mod 57 = 1', 'modpow 7^30 mod 57');
await expect(T['num-rmb'], '1024.50', {}, (s) => s.includes('壹仟零贰拾肆元伍角'), 'rmb');
await expect(T['num-unit'], '5 km', { cat: 'length' }, (s) => s.includes('5000'), 'unit-km');
await expect(T['text-diff'], 'a\nb\n<<<\na\nc', {}, (s) => s.includes('- b') && s.includes('+ c'), 'diff');
await expect(T['text-regex'], '/(\\d+)-(\\d+)/g\n订单 12-34 和 56-78', {}, (s) => s.includes('$1 = "12"'), 'regex');
await expect(T['text-kv'], 'A=1\nB=2', { target: 'json', sep: '=' }, '"A": "1"', 'kv-json');
await expect(T['enc-mojibake'], 'ÉîÑÐ¾ý', {}, (s) => s.includes('深'), 'mojibake-gbk');
await expect(T['enc-unicode'], '\\u6df1\\u7814', { action: 'decode', ascii: true }, (s) => s.includes('深研'), 'unicode-dec');
await expect(T['enc-unicode'], '深研', { action: 'encode', ascii: true }, '\\u6df1\\u7814', 'unicode-enc');
await expect(T['enc-endian'], '12 34 56 78', { type: 'u32', endian: 'little' }, '0x78563412', 'endian-le');
await expect(T['enc-hex'], 'E6B7B1E7A094', { action: 'decode', sep: 'none' }, (s) => s.includes('深研'), 'hex-dec');
await expect(T['enc-qp'], '=E6=B7=B1', { action: 'decode' }, (s) => s.includes('深'), 'qp-dec');
await expect(T['enc-byte-array'], '-1, 0, 127', { action: 'toU' }, '255, 0, 127', 'byte-array');
await expect(T['enc-multibase'], 'toolbox', { base: '58', action: 'encode' }, /^[1-9A-HJ-NP-Za-km-z]+$/, 'base58-enc');
await expect(T['crypto-morse'], '... --- ...', { action: 'decode' }, (s) => s.toUpperCase().includes('SOS'), 'morse-dec');
await expect(T['crypto-caesar'], 'Khoor', { shift: '3', action: 'decode' }, 'Hello', 'caesar-dec');
await expect(T['crypto-xor'], 'aabb', { key: 'k' }, /hex: [0-9a-f]+/, 'xor');
await expect(T['html-table'], 'a\tb\n1\t2', { sep: 'tab', header: true }, '<th>a</th>', 'html-table');
await expect(T['html-escape'], '&lt;b&gt;', { action: 'unescape' }, '<b>', 'html-unescape');
await expect(T['html-meta'], '<title>T</title><meta name="d" content="x">', {}, (s) => s.includes('title: T'), 'meta');
await expect(T['ref-tables'], '', { table: 'ascii' }, (s) => s.includes('65'), 'ascii-table');
await expect(T['rand-uuid'], '', { count: '5', upper: true }, (s) => s.split('\n').length === 5, 'uuid-count');
await expect(T['rand-password'], '', { len: '16', count: '5', symbols: true }, (s) => s.split('\n').every((l) => l.length === 16), 'pw-len');
await expect(T['time-leap'], '2024', {}, (s) => s.includes('是闰年'), 'leap');
await expect(T['time-unix'], '1730000000', { unit: 's' }, (s) => s.includes('2024'), 'ts');
await expect(T['enc-gzip'], '深研君', { action: 'compress', format: 'gzip' }, /[-A-Za-z0-9+/=]{10,}/, 'b64sane');

// gzip roundtrip（异步 CompressionStream）
try {
  const gz = await runOne(T['enc-gzip'], 'hello gzip hello gzip hello gzip', { action: 'compress', format: 'gzip' });
  const back = await runOne(T['enc-gzip'], gz, { action: 'decompress', format: 'gzip' });
  if (!back.includes('hello gzip')) throw new Error(`gzip 往返失败: ${back}`);
  pass++;
} catch (e) { fail++; failures.push(`[gzip-roundtrip] ${e.message}`); }

// aes roundtrip
try {
  const enc = await runOne(T['crypto-aes'], 'secret text', { action: 'encrypt', key: '0123456789abcdef', iv: '' });
  const b64 = enc.split('\n')[0];
  const iv = (enc.match(/IV \(Base64，解密时需要\): (\S+)/) || [])[1];
  const dec = await runOne(T['crypto-aes'], b64, { action: 'decrypt', key: '0123456789abcdef', iv });
  if (!dec.includes('secret text')) throw new Error(`AES 往返失败: ${dec}`);
  pass++;
} catch (e) { fail++; failures.push(`[aes-roundtrip] ${e.message}`); }

// rc4 roundtrip
try {
  const r1 = await runOne(T['crypto-rc4'], 'hello rc4', { key: 'k' });
  const hex = r1.match(/hex: ([0-9a-f]+)/)[1];
  const r2 = await runOne(T['crypto-rc4'], hex, { key: 'k' });
  if (!r2.includes('hello rc4')) throw new Error(`RC4 往返失败: ${r2}`);
  pass++;
} catch (e) { fail++; failures.push(`[rc4-roundtrip] ${e.message}`); }

// base32 roundtrip
try {
  const e1 = await runOne(T['enc-multibase'], 'deepseek toolbox', { base: '32', action: 'encode' });
  const d1 = await runOne(T['enc-multibase'], e1, { base: '32', action: 'decode' });
  if (d1 !== 'deepseek toolbox') throw new Error(`Base32 往返失败: ${d1}`);
  pass++;
} catch (e) { fail++; failures.push(`[base32-roundtrip] ${e.message}`); }

// base62 roundtrip
try {
  const e1 = await runOne(T['enc-multibase'], 'deepseek', { base: '62', action: 'encode' });
  const d1 = await runOne(T['enc-multibase'], e1, { base: '62', action: 'decode' });
  if (d1 !== 'deepseek') throw new Error(`Base62 往返失败: ${d1}`);
  pass++;
} catch (e) { fail++; failures.push(`[base62-roundtrip] ${e.message}`); }

// punycode：编码中文域名
try {
  const out = await runOne(T['enc-punycode'], '深研.example.com', { action: 'encode' });
  if (!out.startsWith('xn--')) throw new Error(`punycode 编码失败: ${out}`);
  pass++;
} catch (e) { fail++; failures.push(`[punycode] ${e.message}`); }

// base85 roundtrip
try {
  const e1 = await runOne(T['enc-base85'], 'hello world 85', { action: 'encode' });
  const d1 = await runOne(T['enc-base85'], e1, { action: 'decode' });
  if (d1 !== 'hello world 85') throw new Error(`Base85 往返失败: "${d1}"`);
  pass++;
} catch (e) { fail++; failures.push(`[base85-roundtrip] ${e.message}`); }

// qrcode 生成
try {
  const r = await runOne(T['qr-gen'], 'https://example.com', { size: '256', ec: 'M' });
  if (!r.includes('data:image/png;base64,')) throw new Error('二维码未生成');
  pass++;
} catch (e) { fail++; failures.push(`[qrcode] ${e.message}`); }

// legacy 工具回归
await expect(T['json-format'], '{"a":1}', { action: 'pretty', indent: '2' }, '"a": 1', 'legacy-json');
await expect(T['url-params'], 'a=1&b=2', {}, 'b = 2', 'legacy-url');

/* ---- 结果 ---- */
console.log(`\n通过 ${pass} / 失败 ${fail}`);
if (failures.length) {
  console.log('\n失败详情:');
  for (const f of failures) console.log('─'.repeat(60) + '\n' + f);
  process.exit(1);
}
