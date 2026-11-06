/**
 * 文本工具组：对比、去重排序、重复统计、字数统计、行处理、正则测试、键值对转代码。
 * 全部纯字符串操作。
 */
import { actionOption, lines } from '../shared.js';

/* ---------------- 文本对比（LCS diff） ---------------- */

function diffLines(a, b) {
  const A = lines(a);
  const B = lines(b);
  const n = A.length;
  const m = B.length;
  // LCS DP 表（大文件可能吃内存，侧边栏场景行数有限，可接受）
  const dp = Array.from({ length: n + 1 }, () => new Uint16Array(m + 1));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] = A[i] === B[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const out = [];
  let i = 0; let j = 0;
  while (i < n && j < m) {
    if (A[i] === B[j]) { out.push(`  ${A[i]}`); i++; j++; }
    else if (dp[i + 1][j] >= dp[i][j + 1]) { out.push(`- ${A[i]}`); i++; }
    else { out.push(`+ ${B[j]}`); j++; }
  }
  while (i < n) { out.push(`- ${A[i]}`); i++; }
  while (j < m) { out.push(`+ ${B[j]}`); j++; }
  return out;
}

const diffTool = {
  id: 'text-diff',
  group: 'text',
  title: '文本对比',
  desc: '逐行 diff（`-` 删除 `+` 新增）。用法：第一行输入 `<<<` 作为分隔，上方为 A 下方为 B',
  sample: 'apple\nbanana\ncherry\n<<<\napple\nbanana\norange\ngrape',
  options: [],
  run(input) {
    const sep = input.split('\n').findIndex((l) => l.trim() === '<<<');
    if (sep < 0) throw new Error('请在中间插入一行 <<< 分隔两侧文本');
    const a = lines(input).slice(0, sep).join('\n');
    const b = lines(input).slice(sep + 1).join('\n');
    return diffLines(a, b).join('\n');
  },
};

/* ---------------- 去重排序 ---------------- */

const dedupeTool = {
  id: 'text-dedupe',
  group: 'text',
  title: '文本去重排序',
  desc: '按行去重、排序、过滤空行',
  sample: 'banana\napple\ncherry\napple\nbanana',
  options: [
    { key: 'sort', label: '排序', type: 'segment', default: 'none', options: [
      { value: 'none', label: '原顺序' },
      { value: 'asc', label: '升序' },
      { value: 'desc', label: '降序' },
    ] },
    { key: 'numeric', label: '数字排序', type: 'switch', default: false },
    { key: 'trim', label: '去空行', type: 'switch', default: true },
  ],
  run(input, o) {
    let ls = lines(input).map((l) => l.trim());
    if (o.trim) ls = ls.filter(Boolean);
    const seen = new Set();
    ls = ls.filter((l) => (seen.has(l) ? false : (seen.add(l), true)));
    if (o.sort !== 'none') {
      const cmp = o.numeric ? (a, b) => (Number(a) || 0) - (Number(b) || 0) : (a, b) => a.localeCompare(b, 'zh');
      ls.sort(cmp);
      if (o.sort === 'desc') ls.reverse();
    }
    return ls.join('\n');
  },
};

/* ---------------- 重复统计 ---------------- */

const countTool = {
  id: 'text-count',
  group: 'text',
  title: '文本重复统计',
  desc: '按行统计出现次数，按次数降序',
  sample: 'apple\nbanana\napple\ncherry\napple\nbanana',
  options: [
    { key: 'mode', label: '统计粒度', type: 'segment', default: 'line', options: [
      { value: 'line', label: '按行' },
      { value: 'char', label: '按字符' },
      { value: 'word', label: '按单词' },
    ] },
  ],
  run(input, o) {
    const counter = new Map();
    const add = (k) => counter.set(k, (counter.get(k) || 0) + 1);
    if (o.mode === 'line') lines(input).forEach((l) => l.trim() && add(l.trim()));
    else if (o.mode === 'char') [...input.replace(/\s/g, '')].forEach(add);
    else input.match(/[\p{L}\p{N}']+/gu)?.forEach(add);
    const sorted = [...counter.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));
    const total = sorted.reduce((s, [, c]) => s + c, 0);
    return [`总计 ${total} 个${o.mode === 'line' ? '行' : o.mode === 'char' ? '字符' : '词'}，${sorted.length} 种`, '', ...sorted.map(([k, c]) => `${String(c).padStart(4)}  ${k}`)].join('\n');
  },
};

/* ---------------- 字数统计 ---------------- */

const wcTool = {
  id: 'text-wc',
  group: 'text',
  title: '字数统计',
  desc: '字符数、单词数、行数、中英文字数',
  sample: 'Hello 深研君，this is a toolbox.\n第二行内容。',
  options: [],
  run(input) {
    const chars = [...input].length;
    const cjk = (input.match(/[\u4e00-\u9fff\u3400-\u4dbf]/g) || []).length;
    const words = (input.match(/[\p{L}\p{N}']+/gu) || []).length;
    const lineCount = lines(input).length;
    const noSpace = input.replace(/\s/g, '').length;
    const bytes = new TextEncoder().encode(input).length;
    return [
      `字符数（含空格）: ${chars}`,
      `字符数（不含空格）: ${noSpace}`,
      `中文字数: ${cjk}`,
      `英文单词数: ${words}`,
      `行数: ${lineCount}`,
      `UTF-8 字节数: ${bytes}`,
    ].join('\n');
  },
};

/* ---------------- 行处理 ---------------- */

const lineTool = {
  id: 'text-line',
  group: 'text',
  title: '行处理',
  desc: '行首尾添加文本 / 行过滤（正则）/ 截取',
  sample: 'const a = 1;\nconst b = 2;\nlet c = 3;',
  options: [
    actionOption('prefix', [
      { value: 'prefix', label: '加前缀' },
      { value: 'suffix', label: '加后缀' },
      { value: 'filter', label: '正则保留' },
      { value: 'remove', label: '正则删除' },
      { value: 'slice', label: '截取行范围' },
      { value: 'trim', label: '去首尾空白' },
    ]),
    { key: 'str', label: '文本 / 正则', type: 'text', default: '', placeholder: '前缀文本或 /regex/' },
    { key: 'range', label: '行范围 (start,end)', type: 'text', default: '1,10', placeholder: '1,10' },
  ],
  run(input, o) {
    let ls = lines(input);
    const s = o.str || '';
    switch (o.action) {
      case 'prefix': return ls.map((l) => s + l).join('\n');
      case 'suffix': return ls.map((l) => l + s).join('\n');
      case 'trim': return ls.map((l) => l.trim()).join('\n');
      case 'filter':
      case 'remove': {
        const re = s.startsWith('/') && s.lastIndexOf('/') > 0
          ? new RegExp(s.slice(1, s.lastIndexOf('/')), s.slice(s.lastIndexOf('/') + 1) || undefined)
          : new RegExp(s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        return ls.filter((l) => (o.action === 'filter' ? re.test(l) : !re.test(l))).join('\n');
      }
      case 'slice': {
        const [a, b] = String(o.range).split(',').map((x) => parseInt(x, 10));
        return ls.slice((a || 1) - 1, b || ls.length).join('\n');
      }
      default: return input;
    }
  },
};

/* ---------------- 正则测试器 ---------------- */

const regexTool = {
  id: 'text-regex',
  group: 'text',
  title: '正则表达式测试器',
  desc: '实时匹配测试，输出每个匹配的分组与位置',
  sample: '/[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[a-z]{2,}/g\n联系 alice@example.com 或 bob@test.org',
  options: [],
  run(input) {
    const nl = input.indexOf('\n');
    if (nl < 0) throw new Error('第一行输入正则（如 /ab+c/gi），其余行为测试文本');
    const first = input.slice(0, nl).trim();
    const text = input.slice(nl + 1);
    let re;
    try {
      const m = first.match(/^\/(.*)\/([a-z]*)$/s);
      re = m ? new RegExp(m[1], m[2].includes('g') ? m[2] : m[2] + 'g') : new RegExp(first, 'g');
    } catch (e) {
      throw new Error(`正则不合法：${e.message}`);
    }
    const rows = [];
    let match;
    let count = 0;
    while ((match = re.exec(text)) && count < 200) {
      count++;
      const lineNo = text.slice(0, match.index).split('\n').length;
      rows.push(`#${count} [${match.index}] 第${lineNo}行: "${match[0]}"`);
      if (match.length > 1) {
        match.slice(1).forEach((g, gi) => rows.push(`    $${gi + 1} = ${g === undefined ? '(未匹配)' : `"${g}"`}`));
      }
      if (match[0] === '') re.lastIndex++;
    }
    if (!count) rows.push('（无匹配）');
    return rows.join('\n');
  },
};

/* ---------------- 键值对转代码 ---------------- */

const kvTool = {
  id: 'text-kv',
  group: 'text',
  title: '键值对转代码',
  desc: 'key=value 文本转 JSON / 环境变量 / Go map / Java Properties',
  sample: 'DB_HOST=localhost\nDB_PORT=5432\nAPP_NAME=toolbox',
  options: [
    { key: 'target', label: '目标格式', type: 'segment', default: 'json', options: [
      { value: 'json', label: 'JSON' },
      { value: 'env', label: 'env 文件' },
      { value: 'go', label: 'Go map' },
      { value: 'java', label: 'Properties' },
    ] },
    { key: 'sep', label: '分隔符', type: 'segment', default: '=', options: [
      { value: '=', label: '=' },
      { value: ':', label: ':' },
      { value: 'space', label: '空格' },
    ] },
  ],
  run(input, o) {
    const sep = o.sep === 'space' ? /\s+/ : o.sep;
    const pairs = [];
    for (const l of lines(input)) {
      const t = l.trim();
      if (!t || t.startsWith('#')) continue;
      const idx = typeof sep === 'string' ? t.indexOf(sep) : t.search(sep);
      if (idx < 0) throw new Error(`行「${t}」缺少分隔符`);
      pairs.push([t.slice(0, idx).trim(), t.slice(idx + 1).trim()]);
    }
    if (!pairs.length) throw new Error('未解析到键值对');
    switch (o.target) {
      case 'json':
        return JSON.stringify(Object.fromEntries(pairs), null, 2);
      case 'env':
        return pairs.map(([k, v]) => `${k.toUpperCase().replace(/[^A-Z0-9_]/g, '_')}=${v}`).join('\n');
      case 'go':
        return `map[string]string{\n${pairs.map(([k, v]) => `\t"${k}": "${v}",`).join('\n')}\n}`;
      case 'java':
        return pairs.map(([k, v]) => `${k} = ${v}`).join('\n');
      default:
        return input;
    }
  },
};

export const TEXT_TOOLS = [diffTool, dedupeTool, countTool, wcTool, lineTool, regexTool, kvTool];
