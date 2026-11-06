/**
 * 随机数/二维码/颜色/设备/HTML 小工具组。
 * run 若返回 { html } 则 UI 以受控 HTML 展示（用于二维码图片等）。
 */
import QRCode from 'qrcode';
import { actionOption, lines } from '../shared.js';

/* ---------------- UUID / 密码 / 随机数 ---------------- */

const uuidTool = {
  id: 'rand-uuid',
  group: 'random',
  title: 'UUID 生成器',
  desc: '批量生成 UUID v4（crypto.getRandomValues）',
  sample: '',
  options: [
    { key: 'count', label: '数量', type: 'segment', default: '5', options: ['1', '5', '10', '50'].map((v) => ({ value: v, label: v })) },
    { key: 'upper', label: '大写', type: 'switch', default: false },
  ],
  run(_input, o) {
    const count = Number(o.count) || 1;
    const out = [];
    for (let i = 0; i < count; i++) {
      const b = crypto.getRandomValues(new Uint8Array(16));
      b[6] = (b[6] & 0x0f) | 0x40;
      b[8] = (b[8] & 0x3f) | 0x80;
      const hex = [...b].map((x) => x.toString(16).padStart(2, '0')).join('');
      let u = `${hex.slice(0, 8)}-${hex.slice(8, 12)}-${hex.slice(12, 16)}-${hex.slice(16, 20)}-${hex.slice(20)}`;
      if (o.upper) u = u.toUpperCase();
      out.push(u);
    }
    return out.join('\n');
  },
};

const passwordTool = {
  id: 'rand-password',
  group: 'random',
  title: '随机密码生成',
  desc: '可配置字符集的安全随机密码',
  sample: '',
  options: [
    { key: 'len', label: '长度', type: 'segment', default: '16', options: ['8', '12', '16', '24', '32'].map((v) => ({ value: v, label: v })) },
    { key: 'count', label: '数量', type: 'segment', default: '5', options: ['1', '5', '10'].map((v) => ({ value: v, label: v })) },
    { key: 'symbols', label: '含符号', type: 'switch', default: true },
  ],
  run(_input, o) {
    let chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789';
    if (o.symbols) chars += '!@#$%^&*()-_=+[]{};:,.?';
    const len = Number(o.len) || 16;
    const count = Number(o.count) || 5;
    const out = [];
    for (let i = 0; i < count; i++) {
      const r = crypto.getRandomValues(new Uint32Array(len));
      // 保证至少含数字
      let pw = [...r].map((x) => chars[x % chars.length]).join('');
      if (!/\d/.test(pw)) {
        const pos = r[0] % len;
        pw = pw.slice(0, pos) + (r[1] % 10) + pw.slice(pos + 1);
      }
      out.push(pw);
    }
    return out.join('\n');
  },
};

const randNumTool = {
  id: 'rand-number',
  group: 'random',
  title: '随机数生成',
  desc: '指定范围的安全随机整数',
  sample: '',
  options: [
    { key: 'min', label: '最小值', type: 'text', default: '1' },
    { key: 'max', label: '最大值', type: 'text', default: '100' },
    { key: 'count', label: '数量', type: 'segment', default: '10', options: ['1', '10', '100'].map((v) => ({ value: v, label: v })) },
    { key: 'unique', label: '不重复', type: 'switch', default: false },
  ],
  run(_input, o) {
    const min = parseInt(o.min, 10);
    const max = parseInt(o.max, 10);
    const count = Number(o.count) || 1;
    if (Number.isNaN(min) || Number.isNaN(max) || min > max) throw new Error('范围不合法');
    if (o.unique && max - min + 1 < count) throw new Error('范围小于数量，无法不重复');
    const range = max - min + 1;
    const used = new Set();
    const out = [];
    while (out.length < count) {
      const buf = crypto.getRandomValues(new Uint32Array(1));
      const v = min + (buf[0] % range);
      if (o.unique) {
        if (used.has(v)) continue;
        used.add(v);
      }
      out.push(v);
    }
    return out.join(', ');
  },
};

/* ---------------- 二维码 ---------------- */

const qrTool = {
  id: 'qr-gen',
  group: 'random',
  title: '二维码生成',
  desc: '文本/URL 生成二维码（本地渲染，可下载）',
  sample: 'https://www.deepseek.com',
  options: [
    { key: 'size', label: '尺寸', type: 'segment', default: '256', options: ['128', '256', '512'].map((v) => ({ value: v, label: v })) },
    { key: 'ec', label: '纠错', type: 'segment', default: 'M', options: ['L', 'M', 'Q', 'H'].map((v) => ({ value: v, label: v })) },
  ],
  async run(input, o) {
    if (!input.trim()) throw new Error('请输入要生成二维码的内容');
    const dataUrl = await QRCode.toDataURL(input, {
      width: Number(o.size) || 256,
      errorCorrectionLevel: o.ec || 'M',
      margin: 2,
    });
    return { html: `<img src="${dataUrl}" alt="二维码" style="max-width:100%;image-rendering:pixelated;" /><br/><a href="${dataUrl}" download="qrcode.png" style="font-size:12px;">⬇ 下载 PNG</a>` };
  },
};

/* ---------------- 颜色工具 ---------------- */

const colorTool = {
  id: 'color-rgb',
  group: 'color',
  title: 'RGB 颜色转换',
  desc: 'HEX / RGB / HSL 互转 + 颜色预览',
  sample: '#4A90D9',
  options: [],
  run(input) {
    let r; let g; let b;
    const hex = input.trim().match(/^#?([0-9a-f]{3}|[0-9a-f]{6})$/i);
    const rgb = input.trim().match(/^rgba?\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
    if (hex) {
      let h = hex[1];
      if (h.length === 3) h = [...h].map((c) => c + c).join('');
      r = parseInt(h.slice(0, 2), 16);
      g = parseInt(h.slice(2, 4), 16);
      b = parseInt(h.slice(4, 6), 16);
    } else if (rgb) {
      [r, g, b] = [1, 2, 3].map((i) => Number(rgb[i]));
      if (r > 255 || g > 255 || b > 255) throw new Error('RGB 分量需在 0~255');
    } else {
      throw new Error('支持 #RGB/#RRGGBB 或 rgb(r,g,b)');
    }
    // RGB → HSL
    const rn = r / 255; const gn = g / 255; const bn = b / 255;
    const max = Math.max(rn, gn, bn); const min = Math.min(rn, gn, bn);
    const l = (max + min) / 2;
    let h = 0; let s = 0;
    if (max !== min) {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      if (max === rn) h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6;
      else if (max === gn) h = ((bn - rn) / d + 2) / 6;
      else h = ((rn - gn) / d + 4) / 6;
    }
    const swatch = (c, label) => `<span style="display:inline-block;width:14px;height:14px;vertical-align:-2px;border:1px solid #8888;background:${c};"></span> ${label}`;
    return {
      html: [
        `${swatch(`rgb(${r},${g},${b})`, '')}`,
        `HEX : #${[r, g, b].map((v) => v.toString(16).padStart(2, '0')).join('').toUpperCase()}`,
        `RGB : rgb(${r}, ${g}, ${b})`,
        `HSL : hsl(${Math.round(h * 360)}, ${Math.round(s * 100)}%, ${Math.round(l * 100)}%)`,
        `亮度: ${(0.299 * r + 0.587 * g + 0.114 * b).toFixed(0)} / 255`,
      ].join('\n'),
    };
  },
};

const pickerTool = {
  id: 'color-picker',
  group: 'color',
  title: '屏幕取色器',
  desc: 'EyeDropper API 从屏幕任意位置取色（Chrome/Edge）',
  sample: '',
  options: [],
  custom: 'color-picker',
  run() {
    return ''; // UI custom 渲染器接管
  },
};

/* ---------------- 设备测试 ---------------- */

const keyTestTool = {
  id: 'device-keyboard',
  group: 'device',
  title: '键盘按键测试',
  desc: '按键显示 key / code / keyCode / 修饰键',
  sample: '',
  custom: 'keyboard',
  options: [],
  run() {
    return '';
  },
};

const mouseTestTool = {
  id: 'device-mouse',
  group: 'device',
  title: '鼠标按键测试',
  desc: '在此区域点击/右键/中键，显示按键信息',
  sample: '',
  custom: 'mouse',
  options: [],
  run() {
    return '';
  },
};

/* ---------------- HTML 小工具 ---------------- */

const htmlEscapeTool = {
  id: 'html-escape',
  group: 'html',
  title: 'HTML 转义字符',
  desc: 'HTML 实体转义与还原（含命名实体对照）',
  sample: '<div class="a">Tom & Jerry</div>',
  options: [
    actionOption('escape', [
      { value: 'escape', label: '转义' },
      { value: 'unescape', label: '还原' },
    ]),
  ],
  run(input, o) {
    if (o.action === 'escape') {
      return input.replace(/[&<>"'\u00a0]/g, (c) => ({
        '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '\u00a0': '&nbsp;',
      }[c]));
    }
    // 自带实体解码（不依赖 DOM）
    const NAMED = {
      amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: '\u00a0', copy: '©', reg: '®',
      trade: '™', hellip: '…', mdash: '—', ndash: '–', lsquo: '‘', rsquo: '’', ldquo: '“',
      rdquo: '”', times: '×', divide: '÷', deg: '°', plusmn: '±', sup2: '²', sup3: '³',
      frac12: '½', frac14: '¼', middot: '·', sect: '§', para: '¶', bull: '•', dagger: '†',
      permil: '‰', euro: '€', pound: '£', yen: '¥', cent: '¢', laquo: '«', raquo: '»',
    };
    return input.replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z][a-zA-Z0-9]*);/g, (m, body) => {
      if (body[0] === '#') {
        const code = body[1] === 'x' || body[1] === 'X'
          ? parseInt(body.slice(2), 16)
          : parseInt(body.slice(1), 10);
        if (Number.isFinite(code) && code >= 0 && code <= 0x10ffff) {
          try { return String.fromCodePoint(code); } catch { return m; }
        }
        return m;
      }
      const name = body.toLowerCase();
      return name in NAMED ? NAMED[name] : m;
    });
  },
};

const metaTool = {
  id: 'html-meta',
  group: 'html',
  title: 'Meta Tag 提取',
  desc: '提取 HTML 的 title / meta / og 标签',
  sample: '<!DOCTYPE html><html><head><title>示例</title><meta name="description" content="测试页面"><meta property="og:image" content="https://x/a.png"></head><body></body></html>',
  options: [],
  run(input) {
    const doc = new DOMParser().parseFromString(input, 'text/html');
    const rows = [];
    if (doc.title) rows.push(`title: ${doc.title}`);
    doc.querySelectorAll('meta').forEach((m) => {
      const name = m.getAttribute('name') || m.getAttribute('property') || m.getAttribute('http-equiv');
      const content = m.getAttribute('content');
      if (name) rows.push(`${name}: ${content ?? ''}`);
    });
    doc.querySelectorAll('link[rel]').forEach((l) => rows.push(`link[${l.getAttribute('rel')}]: ${l.getAttribute('href')}`));
    return rows.join('\n') || '（未找到 meta 信息）';
  },
};

const tableTool = {
  id: 'html-table',
  group: 'html',
  title: '文本转 HTML 表格',
  desc: 'TSV/CSV/分隔文本 → HTML table（可直接贴入网页）',
  sample: '姓名\t年龄\t城市\n深研君\t9\t杭州\nToolbox\t1\t云端',
  options: [
    { key: 'sep', label: '分隔符', type: 'segment', default: 'tab', options: [
      { value: 'tab', label: 'Tab' },
      { value: 'comma', label: '逗号' },
      { value: 'pipe', label: '|' },
    ] },
    { key: 'header', label: '首行为表头', type: 'switch', default: true },
  ],
  run(input, o) {
    const sep = o.sep === 'tab' ? '\t' : o.sep === 'comma' ? ',' : '|';
    const esc = (s) => s.replace(/[&<>]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;' }[c]));
    const ls = lines(input).filter((l) => l.trim());
    if (!ls.length) throw new Error('请输入表格文本');
    const rows = ls.map((l) => l.split(sep).map((c) => c.trim()));
    const [head, ...body] = o.header ? [rows[0], ...rows.slice(1)] : [null, ...rows];
    let out = '<table>\n';
    if (o.header && head) out += `  <thead><tr>${head.map((c) => `<th>${esc(c)}</th>`).join('')}</tr></thead>\n`;
    out += '  <tbody>\n';
    for (const r of body) out += `    <tr>${r.map((c) => `<td>${esc(c)}</td>`).join('')}</tr>\n`;
    out += '  </tbody>\n</table>';
    return out;
  },
};

const markdownTool = {
  id: 'html-markdown',
  group: 'html',
  title: 'Markdown 预览',
  desc: 'Markdown → HTML（内置轻量渲染器，输出源码）',
  sample: '# 标题\n\n- 列表项 **加粗**\n- `代码`\n\n[链接](https://example.com)',
  options: [],
  run(input) {
    let html = input
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/^###### (.*)$/gm, '<h6>$1</h6>')
      .replace(/^##### (.*)$/gm, '<h5>$1</h5>')
      .replace(/^#### (.*)$/gm, '<h4>$1</h4>')
      .replace(/^### (.*)$/gm, '<h3>$1</h3>')
      .replace(/^## (.*)$/gm, '<h2>$1</h2>')
      .replace(/^# (.*)$/gm, '<h1>$1</h1>')
      .replace(/^&gt; (.*)$/gm, '<blockquote>$1</blockquote>')
      .replace(/^\s*[-*] (.*)$/gm, '<li>$1</li>')
      .replace(/^\s*\d+\. (.*)$/gm, '<li>$1</li>')
      .replace(/(<li>[\s\S]*?<\/li>)(?!\s*<li>)/g, '<ul>$1</ul>')
      .replace(/^---$/gm, '<hr/>')
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
      .replace(/\*([^*]+)\*/g, '<em>$1</em>')
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
      .replace(/\n{2,}/g, '\n<p/>\n');
    // 换行转 br（非标签行）
    html = html.split('\n').map((l) => (l.startsWith('<') ? l : l + '<br/>')).join('\n');
    return html;
  },
};

const refTableTool = {
  id: 'ref-tables',
  group: 'html',
  title: 'HTTP / ASCII 速查表',
  desc: 'HTTP 状态码、请求方法、MIME 常用项与 ASCII 对照',
  sample: '',
  options: [
    { key: 'table', label: '速查表', type: 'segment', default: 'status', options: [
      { value: 'status', label: '状态码' },
      { value: 'method', label: '请求方式' },
      { value: 'mime', label: 'MimeType' },
      { value: 'ascii', label: 'ASCII' },
    ] },
  ],
  run(_input, o) {
    if (o.table === 'status') {
      return [
        '1xx 信息',
        '  100 Continue  101 Switching Protocols',
        '2xx 成功',
        '  200 OK  201 Created  204 No Content  206 Partial Content',
        '3xx 重定向',
        '  301 Moved Permanently  302 Found  304 Not Modified  307/308 临时/永久重定向',
        '4xx 客户端错误',
        '  400 Bad Request  401 Unauthorized  403 Forbidden  404 Not Found',
        '  405 Method Not Allowed  409 Conflict  413 Payload Too Large  415 Unsupported Media Type  429 Too Many Requests',
        '5xx 服务端错误',
        '  500 Internal Server Error  501 Not Implemented  502 Bad Gateway  503 Service Unavailable  504 Gateway Timeout',
      ].join('\n');
    }
    if (o.table === 'method') {
      return [
        'GET     获取资源（幂等，可缓存）',
        'POST    创建/提交（非幂等）',
        'PUT     全量替换（幂等）',
        'PATCH   部分更新',
        'DELETE  删除（幂等）',
        'HEAD    同 GET 但无响应体',
        'OPTIONS 查询支持的方法（CORS 预检）',
        'TRACE   回显请求（调试）',
        'CONNECT 隧道（HTTPS 代理）',
      ].join('\n');
    }
    if (o.table === 'mime') {
      return [
        'text/html         .html   网页',
        'text/plain        .txt    纯文本',
        'text/css          .css    样式',
        'text/javascript   .js     脚本（推荐）',
        'application/json  .json   JSON',
        'application/xml   .xml    XML',
        'application/pdf   .pdf    PDF',
        'application/octet-stream  未知二进制（下载）',
        'image/png  image/jpeg  image/gif  image/webp  image/svg+xml',
        'multipart/form-data       文件上传',
        'application/x-www-form-urlencoded  表单默认',
      ].join('\n');
    }
    // ascii
    const rows = [];
    for (let i = 32; i < 127; i += 4) {
      rows.push([0, 1, 2, 3].map((k) => {
        const c = i + k;
        if (c > 127) return '';
        const ch = c === 32 ? 'SP' : String.fromCharCode(c);
        return `${String(c).padStart(3)} ${ch.padEnd(3)}`;
      }).join('  '));
    }
    return `DEC  CHR      DEC  CHR      DEC  CHR      DEC  CHR\n${rows.join('\n')}`;
  },
};

export const MISC_TOOLS = [
  uuidTool, passwordTool, randNumTool, qrTool,
  colorTool, pickerTool,
  keyTestTool, mouseTestTool,
  htmlEscapeTool, metaTool, tableTool, markdownTool, refTableTool,
];
