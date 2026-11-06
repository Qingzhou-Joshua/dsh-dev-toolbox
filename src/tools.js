/**
 * dsh-dev-toolbox — 工具注册聚合。
 * 每个工具: { id, group, title, desc, sample, options?, custom?, run(input, opts) }
 * run 可返回 string、Promise<string>，或 { html }（受控 HTML 展示，用于图片/预览）。
 */
import { ENCODE_TOOLS } from './tools/encode.js';
import { HASH_TOOLS, CRYPTO_TOOLS } from './tools/hash.js';
import { TEXT_TOOLS } from './tools/text.js';
import { NUM_TOOLS, TIME_TOOLS } from './tools/numtime.js';
import { MISC_TOOLS } from './tools/misc.js';
import { LEGACY_TOOLS } from './tools/legacy.js';

export const GROUPS = [
  { id: 'json', label: 'JSON', order: 0 },
  { id: 'format', label: '格式化', order: 1 },
  { id: 'url', label: 'URL', order: 2 },
  { id: 'encode', label: '编码解码', order: 3 },
  { id: 'hash', label: '摘要', order: 4 },
  { id: 'crypto', label: '加密', order: 5 },
  { id: 'text', label: '文本', order: 6 },
  { id: 'num', label: '数字', order: 7 },
  { id: 'time', label: '日期时间', order: 8 },
  { id: 'random', label: '随机/二维码', order: 9 },
  { id: 'color', label: '颜色', order: 10 },
  { id: 'device', label: '设备测试', order: 11 },
  { id: 'html', label: 'HTML/速查', order: 12 },
];

export const TOOLS = [
  ...LEGACY_TOOLS,
  ...ENCODE_TOOLS,
  ...HASH_TOOLS,
  ...CRYPTO_TOOLS,
  ...TEXT_TOOLS,
  ...NUM_TOOLS,
  ...TIME_TOOLS,
  ...MISC_TOOLS,
];

export function getTool(id) {
  return TOOLS.find((t) => t.id === id) || TOOLS[0];
}
