/**
 * 数字工具组 + 日期时间组：chmod、IEEE754、原反补码、模幂、十六进制计算器、
 * Unix 时间戳、Cron 解析、日期计算器、闰年、人民币大写、BMI、单位换算。
 */
import { actionOption, lines } from '../shared.js';

/* ---------------- chmod ---------------- */

const PERM_BITS = [
  ['4000', 'setuid', 's'], ['2000', 'setgid', 's'], ['1000', 'sticky', 't'],
];

const chmodTool = {
  id: 'num-chmod',
  group: 'num',
  title: 'chmod 计算器',
  desc: '权限数字 ↔ rwx 字符串互转',
  sample: '755',
  options: [
    actionOption('fromNum', [
      { value: 'fromNum', label: '数字 → 字符' },
      { value: 'fromStr', label: '字符 → 数字' },
    ]),
  ],
  run(input, o) {
    if (o.action === 'fromNum') {
      const m = input.trim().match(/^([0-7])([0-7]{3})$/) || input.trim().match(/^([0-7]{3})$/);
      if (!m) throw new Error('请输入 3~4 位八进制，如 755 或 4755');
      const full = m[2] !== undefined ? input.trim() : `0${input.trim()}`;
      const special = Number(full[0]);
      const digits = full.slice(1).split('').map(Number);
      const who = ['Owner', 'Group', 'Other'];
      const rows = [];
      digits.forEach((d, i) => {
        const r = d & 4 ? 'r' : '-';
        const w = d & 2 ? 'w' : '-';
        let x = d & 1 ? 'x' : '-';
        if (i === 0 && special & 4) x = d & 1 ? 's' : 'S';
        if (i === 1 && special & 2) x = d & 1 ? 's' : 'S';
        if (i === 2 && special & 1) x = d & 1 ? 't' : 'T';
        rows.push(`${who[i]} (${d}): ${r + w + x}`);
      });
      const str = digits.map((d) => ((d & 4 ? 'r' : '-') + (d & 2 ? 'w' : '-') + (d & 1 ? 'x' : '-'))).join('');
      return `${rows.join('\n')}\n\n符号表示: ${str}${special ? `（特殊位 ${special}）` : ''}`;
    }
    const s = input.trim();
    if (!/^[rwxstSST-]{9}$/.test(s)) throw new Error('请输入 9 位 rwx 字符串，如 rwxr-xr-x');
    let num = '';
    for (let g = 0; g < 3; g++) {
      const t = s.slice(g * 3, g * 3 + 3);
      num += (t[0] === 'r' ? 4 : 0) + (t[1] === 'w' ? 2 : 0) + (t[2] === 'x' || t[2] === 's' || t[2] === 't' ? 1 : 0);
    }
    let special = 0;
    if (/[sS]/.test(s[2])) special += 4;
    if (/[sS]/.test(s[5])) special += 2;
    if (/[tT]/.test(s[8])) special += 1;
    return `chmod ${special ? special : ''}${num}`;
  },
};

/* ---------------- IEEE 754 ---------------- */

const ieeeTool = {
  id: 'num-ieee754',
  group: 'num',
  title: 'IEEE 754 浮点数',
  desc: 'Float32/64 ↔ 十六进制字节表示',
  sample: '3.1415926',
  options: [
    { key: 'type', label: '精度', type: 'segment', default: 'f32', options: [
      { value: 'f32', label: 'Float32' },
      { value: 'f64', label: 'Float64' },
    ] },
  ],
  run(input, o) {
    const isF32 = o.type === 'f32';
    const bytes = new Uint8Array(isF32 ? 4 : 8);
    const dv = new DataView(bytes.buffer);
    const val = Number(input);
    if (Number.isNaN(val)) throw new Error('请输入合法数字');
    if (isF32) dv.setFloat32(0, val); else dv.setFloat64(0, val);
    const hex = [...bytes].map((b) => b.toString(16).padStart(2, '0').toUpperCase()).join(' ');
    const total = bytes.length * 8;
    const bits = [...bytes].map((b) => b.toString(2).padStart(8, '0')).join('');
    const eBits = isF32 ? 8 : 11;
    const sign = bits[0];
    const exp = bits.slice(1, 1 + eBits);
    const frac = bits.slice(1 + eBits);
    return [
      `十进制: ${val}`,
      `十六进制: ${hex}`,
      `位拆分 (1符号/${eBits}指数/${total - 1 - eBits}尾数):`,
      `  符号: ${sign} (${Number(sign) ? '负' : '正'})`,
      `  指数: ${exp} = ${parseInt(exp, 2)}（偏移 ${isF32 ? 127 : 1023}）`,
      `  尾数: ${frac}`,
    ].join('\n');
  },
};

/* ---------------- 原码/反码/补码 ---------------- */

const complementTool = {
  id: 'num-complement',
  group: 'num',
  title: '原码/反码/补码',
  desc: '整数在 8/16/32 位下的原码、反码、补码',
  sample: '-42',
  options: [
    { key: 'bits', label: '位宽', type: 'segment', default: '8', options: ['8', '16', '32'].map((v) => ({ value: v, label: `${v} 位` })) },
  ],
  run(input, o) {
    const n = Number(input.trim());
    if (!Number.isInteger(n)) throw new Error('请输入整数');
    const bits = Number(o.bits);
    const limit = 2 ** (bits - 1);
    if (n >= limit || n < -limit) throw new Error(`${bits} 位有符号整数范围为 ${-limit} ~ ${limit - 1}`);
    const pad = (s) => s.padStart(bits, '0').replace(/(.{4})(?=.)/g, '$1 ');
    if (n >= 0) {
      const b = pad(n.toString(2));
      return `十进制: ${n}\n原码: ${b}\n反码: ${b}\n补码: ${b}`;
    }
    // 负数：原码 = 符号位 1 + 绝对值；反码 = 符号位不变、其余取反；补码 = 反码 + 1
    const grp = (s) => s.replace(/(.{4})(?=.)/g, '$1 ');
    const magBits = ((-n) | limit).toString(2).padStart(bits, '0');
    const invBits = magBits[0] + [...magBits.slice(1)].map((c) => (c === '0' ? '1' : '0')).join('');
    const arr = [...invBits];
    for (let k = arr.length - 1; k >= 0; k--) {
      if (arr[k] === '0') { arr[k] = '1'; break; }
      arr[k] = '0';
    }
    return `十进制: ${n}\n原码: ${grp(magBits)}（符号1 + 绝对值）\n反码: ${grp(invBits)}（符号位不变，其余取反）\n补码: ${grp(arr.join(''))}（反码 + 1）`;
  },
};

/* ---------------- 模幂 ---------------- */

const modpowTool = {
  id: 'num-modpow',
  group: 'num',
  title: '模幂计算器',
  desc: '计算 base^exp mod m（BigInt，支持超大数）',
  sample: '7\n30\n57',
  options: [],
  run(input) {
    const [b, e, m] = lines(input).map((l) => BigInt(l.trim()));
    if (m === 0n) throw new Error('模数不能为 0');
    let result = 1n;
    let base = ((b % m) + m) % m;
    let exp = e;
    while (exp > 0n) {
      if (exp & 1n) result = (result * base) % m;
      base = (base * base) % m;
      exp >>= 1n;
    }
    return `${b}^${e} mod ${m} = ${result}`;
  },
};

/* ---------------- 十六进制计算器 ---------------- */

const hexCalcTool = {
  id: 'num-hexcalc',
  group: 'num',
  title: '十六进制计算器',
  desc: '支持 0x 前缀的加减乘除与位运算表达式（大整数）',
  sample: '0xFF + 0x10 * 2',
  options: [],
  run(input) {
    const expr = input.trim();
    if (!/^[\dxXa-fA-F+\-*/%&|^~()<>!\s]+$/.test(expr)) throw new Error('只允许数字、0x 十六进制与 + - * / % & | ^ ~ << >> () !');
    const js = expr.replace(/(\b0[xX][0-9a-fA-F]+\b)|(\b\d+\b)/g, (m0) => `${m0}n`);
    let result;
    try {
      // eslint-disable-next-line no-new-func
      result = Function(`"use strict"; return (${js})`)();
    } catch (e) {
      throw new Error(`表达式错误：${e.message}`);
    }
    if (typeof result !== 'bigint' && typeof result !== 'number') throw new Error('结果不是数值');
    const big = BigInt(result);
    const signed = (b, bits = 64) => {
      const mod = 1n << BigInt(bits);
      const v = ((b % mod) + mod) % mod;
      return v >= mod / 2n ? v - mod : v;
    };
    return [
      `十进制: ${big}`,
      `十六进制: 0x${big < 0n ? '-' : ''}${(big < 0n ? -big : big).toString(16).toUpperCase()}`,
      `二进制: ${big.toString(2).replace(/(.{4})(?=.)/g, '$1 ')}`,
      `(int64): ${signed(big)}`,
    ].join('\n');
  },
};

/* ---------------- Unix 时间戳 ---------------- */

const tsTool = {
  id: 'time-unix',
  group: 'time',
  title: 'Unix 时间戳转换',
  desc: '时间戳 ↔ 日期双向转换（输入数字按时间戳，输入日期按转换）',
  sample: '1730000000',
  options: [
    { key: 'unit', label: '单位', type: 'segment', default: 's', options: [
      { value: 's', label: '秒' },
      { value: 'ms', label: '毫秒' },
    ] },
  ],
  run(input, o) {
    const now = Date.now();
    const t = input.trim();
    const fmt = (ms) => ({
      local: new Date(ms).toLocaleString('zh-CN', { hour12: false }),
      iso: new Date(ms).toISOString(),
    });
    // 纯数字：按时间戳解析
    if (/^\d{10,16}$/.test(t)) {
      let ms = Number(t);
      if (o.unit === 's' || t.length === 10) ms *= 1000;
      const { local, iso } = fmt(ms);
      return [
        `时间戳: ${t}`,
        `本地时间: ${local}`,
        `ISO (UTC): ${iso}`,
        `相对现在: ${Math.round((ms - now) / 86400000)} 天`,
        '',
        '当前时间戳:',
        `  秒: ${Math.floor(now / 1000)}`,
        `  毫秒: ${now}`,
      ].join('\n');
    }
    // 其他：当作日期时间解析
    const d = new Date(t);
    if (Number.isNaN(d.getTime())) throw new Error('无法识别的日期时间（支持 2024-01-01 12:00:00 格式）');
    return [
      `输入: ${t}`,
      `Unix 秒: ${Math.floor(d.getTime() / 1000)}`,
      `Unix 毫秒: ${d.getTime()}`,
      `ISO (UTC): ${d.toISOString()}`,
      '',
      '当前时间戳:',
      `  秒: ${Math.floor(now / 1000)}`,
      `  毫秒: ${now}`,
    ].join('\n');
  },
};

/* ---------------- Cron 表达式 ---------------- */

const CRON_FIELDS = [
  { name: '分钟', min: 0, max: 59 },
  { name: '小时', min: 0, max: 23 },
  { name: '日', min: 1, max: 31 },
  { name: '月', min: 1, max: 12 },
  { name: '星期', min: 0, max: 6 },
];
const WEEK_NAMES = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];

function parseCronField(field, { min, max, isWeek }) {
  const values = new Set();
  const expand = (part) => {
    let step = 1;
    let range = part;
    if (part.includes('/')) {
      [range, step] = part.split('/');
      step = Number(step);
      if (!step || step < 1) throw new Error(`步长不合法: ${part}`);
    }
    let lo = min;
    let hi = max;
    if (range !== '*' && range !== '') {
      if (range.includes('-')) {
        [lo, hi] = range.split('-').map(Number);
      } else {
        lo = hi = Number(range);
      }
      if (Number.isNaN(lo) || Number.isNaN(hi)) throw new Error(`字段不合法: ${part}`);
    }
    if (lo < min || hi > max || lo > hi) throw new Error(`字段越界: ${part}（范围 ${min}-${max}）`);
    for (let v = lo; v <= hi; v += step) values.add(v);
  };
  field.split(',').forEach(expand);
  if (!values.size) throw new Error('字段为空');
  return [...values].sort((a, b) => a - b);
}

const cronTool = {
  id: 'time-cron',
  group: 'time',
  title: 'Cron 表达式解析',
  desc: '解析 5 位 Cron 表达式并计算未来 5 次执行时间',
  sample: '30 9 * * 1-5',
  options: [],
  run(input) {
    const parts = input.trim().split(/\s+/);
    if (parts.length !== 5) throw new Error('Cron 表达式需为 5 位：分 时 日 月 星期');
    const parsed = parts.map((p, i) => parseCronField(p, { ...CRON_FIELDS[i], isWeek: i === 4 }));
    const desc = parsed
      .map((vals, i) => {
        const f = CRON_FIELDS[i];
        let vs = vals;
        if (i === 4) vs = vals.map((v) => WEEK_NAMES[v] ?? v);
        return `${f.name}: ${parts[i] === '*' ? '每' + f.name : vs.join(', ')}`;
      })
      .join('\n');
    // 计算 Next 5 次：从现在起逐分钟扫描（最多扫 366 天）
    const next = [];
    const cur = new Date();
    cur.setSeconds(0, 0);
    cur.setMinutes(cur.getMinutes() + 1);
    const limit = new Date(cur.getTime() + 366 * 86400000);
    while (next.length < 5 && cur < limit) {
      if (parsed[0].includes(cur.getMinutes())
        && parsed[1].includes(cur.getHours())
        && parsed[2].includes(cur.getDate())
        && parsed[3].includes(cur.getMonth() + 1)
        && parsed[4].includes(cur.getDay())) {
        next.push(cur.toLocaleString('zh-CN', { hour12: false }));
      }
      cur.setMinutes(cur.getMinutes() + 1);
    }
    return `${desc}\n\n未来 5 次执行:\n${next.map((t, i) => `${i + 1}. ${t}`).join('\n') || '（一年内无执行）'}`;
  },
};

/* ---------------- 日期计算器 ---------------- */

const dateCalcTool = {
  id: 'time-datecalc',
  group: 'time',
  title: '日期计算器',
  desc: '两个日期相差天数，或日期加减 N 天',
  sample: '2024-01-01\n2025-06-30',
  options: [
    actionOption('diff', [
      { value: 'diff', label: '日期差' },
      { value: 'add', label: '加减天数' },
    ]),
    { key: 'days', label: '天数（加减模式）', type: 'text', default: '30', placeholder: '如 30 或 -7' },
  ],
  run(input, o) {
    const ls = lines(input).map((l) => l.trim()).filter(Boolean);
    const parse = (s) => {
      const d = new Date(s);
      if (Number.isNaN(d.getTime())) throw new Error(`日期不合法: ${s}`);
      return d;
    };
    if (o.action === 'diff') {
      if (ls.length < 2) throw new Error('请输入两行日期');
      const a = parse(ls[0]);
      const b = parse(ls[1]);
      const days = Math.round((b - a) / 86400000);
      return [
        `${ls[0]} → ${ls[1]}`,
        `相差: ${days} 天（约 ${(days / 30.44).toFixed(1)} 个月 / ${(days / 365.25).toFixed(2)} 年）`,
        `星期: ${WEEK_NAMES[a.getDay()]} → ${WEEK_NAMES[b.getDay()]}`,
      ].join('\n');
    }
    if (!ls.length) throw new Error('请输入起始日期');
    const d = parse(ls[0]);
    const n = Number(o.days);
    if (Number.isNaN(n)) throw new Error('天数需为数字');
    const out = new Date(d.getTime() + n * 86400000);
    return `${ls[0]} ${n >= 0 ? '+' : ''}${n} 天 = ${out.toLocaleDateString('zh-CN')}（${WEEK_NAMES[out.getDay()]}）`;
  },
};

/* ---------------- 闰年查询 ---------------- */

const leapTool = {
  id: 'time-leap',
  group: 'time',
  title: '闰年查询',
  desc: '判断年份是否闰年，列出范围内闰年',
  sample: '2024',
  options: [],
  run(input) {
    const isLeap = (y) => (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
    const nums = lines(input).map((l) => parseInt(l.trim(), 10)).filter((n) => !Number.isNaN(n) && n > 0);
    if (!nums.length) throw new Error('请输入年份');
    if (nums.length === 1) {
      const y = nums[0];
      return `${y} 年${isLeap(y) ? '是' : '不是'}闰年（${isLeap(y) ? 366 : 365} 天）`;
    }
    const [a, b] = nums;
    const leaps = [];
    for (let y = a; y <= b && leaps.length < 100; y++) if (isLeap(y)) leaps.push(y);
    return `${a}~${b} 之间的闰年（${leaps.length} 个，最多显示 100）:\n${leaps.join(', ')}`;
  },
};

/* ---------------- 人民币大写 ---------------- */

const rmbTool = {
  id: 'num-rmb',
  group: 'num',
  title: '人民币大写转换',
  desc: '数字金额 → 人民币大写（支票/合同用）',
  sample: '1024.50',
  options: [],
  run(input) {
    const n = Number(input.trim().replace(/[,，]/g, ''));
    if (Number.isNaN(n) || n < 0) throw new Error('请输入非负金额');
    if (n >= 1e16) throw new Error('金额过大（≥1万亿亿）');
    const DIGITS = '零壹贰叁肆伍陆柒捌玖';
    const UNITS = ['', '拾', '佰', '仟'];
    const GROUPS = ['', '万', '亿', '万亿'];
    const intPart = Math.floor(n);
    const decPart = Math.round((n - intPart) * 100);
    const group4 = (num) => {
      let s = '';
      let zero = false;
      for (let i = 3; i >= 0; i--) {
        const d = Math.floor(num / 10 ** i) % 10;
        if (d === 0) {
          zero = s.length > 0;
        } else {
          if (zero && s) s += '零';
          s += DIGITS[d] + UNITS[i];
          zero = false;
        }
      }
      return s;
    };
    let out = '';
    if (intPart === 0) out = '零';
    else {
      const parts = [];
      let rest = intPart;
      let gi = 0;
      while (rest > 0) {
        parts.unshift([rest % 10000, GROUPS[gi]]);
        rest = Math.floor(rest / 10000);
        gi++;
      }
      parts.forEach(([g, unit], idx) => {
        if (g === 0) return;
        const needZero = idx > 0 && g < 1000;
        out += (needZero ? '零' : '') + group4(g) + unit;
      });
    }
    out += '元';
    if (decPart === 0) out += '整';
    else {
      const jiao = Math.floor(decPart / 10);
      const fen = decPart % 10;
      if (jiao) out += DIGITS[jiao] + '角';
      else if (fen) out += '零';
      if (fen) out += DIGITS[fen] + '分';
      else out += '整';
    }
    return `${n.toLocaleString('zh-CN')} → ${out}`;
  },
};

/* ---------------- BMI ---------------- */

const bmiTool = {
  id: 'num-bmi',
  group: 'num',
  title: 'BMI 计算器',
  desc: '身高体重算 BMI 与健康区间',
  sample: '175\n70',
  options: [],
  run(input) {
    const [h, w] = lines(input).map((l) => Number(l.trim()));
    if (!h || !w || h < 50 || h > 250 || w < 10 || w > 400) throw new Error('第一行身高(cm)、第二行体重(kg)');
    const bmi = w / (h / 100) ** 2;
    const level = bmi < 18.5 ? '偏瘦'
      : bmi < 24 ? '正常'
        : bmi < 28 ? '超重' : '肥胖';
    const ideal = [18.5 * (h / 100) ** 2, 24 * (h / 100) ** 2];
    return `BMI = ${bmi.toFixed(1)}（${level}）\n健康体重范围: ${ideal[0].toFixed(1)} ~ ${ideal[1].toFixed(1)} kg`;
  },
};

/* ---------------- 单位换算 ---------------- */

const UNIT_TABLES = {
  length: {
    label: '长度', base: 'm', units: {
      km: 1000, m: 1, dm: 0.1, cm: 0.01, mm: 0.001, um: 1e-6, nm: 1e-9,
      mile: 1609.344, yard: 0.9144, foot: 0.3048, inch: 0.0254, nmi: 1852,
    },
  },
  weight: {
    label: '重量', base: 'kg', units: {
      t: 1000, kg: 1, g: 0.001, mg: 1e-6, lb: 0.45359237, oz: 0.028349523125, jin: 0.5, liang: 0.05,
    },
  },
  data: {
    label: '数据', base: 'B', units: {
      TB: 2 ** 40, GB: 2 ** 30, MB: 2 ** 20, KB: 2 ** 10, B: 1,
      Tbit: 2 ** 37, Gbit: 2 ** 27, Mbit: 2 ** 17, Kbit: 2 ** 7,
    },
  },
  area: {
    label: '面积', base: 'm²', units: {
      'km²': 1e6, 'm²': 1, 'dm²': 0.01, 'cm²': 1e-4, ha: 1e4, mu: 2000 / 3, 'ft²': 0.09290304, 'in²': 0.00064516,
    },
  },
};

const unitTool = {
  id: 'num-unit',
  group: 'num',
  title: '单位换算',
  desc: '长度/重量/数据/面积 换算。输入: 数量+源单位，如 5 km',
  sample: '5 km',
  options: [
    { key: 'cat', label: '类别', type: 'segment', default: 'length', options: Object.entries(UNIT_TABLES).map(([v, t]) => ({ value: v, label: t.label })) },
  ],
  run(input, o) {
    const table = UNIT_TABLES[o.cat];
    const m = input.trim().match(/^([-+0-9.eE]+)\s*([a-zA-Zμμ²³]+)$/);
    if (!m) throw new Error('输入格式: 数值 + 单位，如 5 km');
    const value = Number(m[1]);
    const unit = m[2];
    if (!(unit in table.units)) {
      throw new Error(`「${unit}」不是${table.label}单位。可用: ${Object.keys(table.units).join(' ')}`);
    }
    const baseVal = value * table.units[unit];
    return Object.entries(table.units)
      .map(([u, f]) => `${u.padEnd(6)}: ${baseVal / f}`)
      .join('\n');
  },
};

export const NUM_TOOLS = [chmodTool, ieeeTool, complementTool, modpowTool, hexCalcTool, rmbTool, bmiTool, unitTool];
export const TIME_TOOLS = [tsTool, cronTool, dateCalcTool, leapTool];
