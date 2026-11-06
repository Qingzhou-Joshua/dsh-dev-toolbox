/**
 * dsh-dev-toolbox — 公共小工具 & option 构造器。
 */

export const INDENTS = { '2': '  ', '4': '    ', tab: '\t' };

export function indentUnit(opt) {
  return INDENTS[opt.indent] || INDENTS['2'];
}

export function parseJsonOrThrow(text) {
  try {
    return JSON.parse(text);
  } catch (e) {
    throw new Error(`JSON 解析失败：${e.message}`);
  }
}

export function indentOption() {
  return {
    key: 'indent',
    label: '缩进',
    type: 'segment',
    default: '2',
    options: [
      { value: '2', label: '2 空格' },
      { value: '4', label: '4 空格' },
      { value: 'tab', label: 'Tab' },
    ],
  };
}

export function actionOption(def, pairs) {
  return { key: 'action', label: '操作', type: 'segment', default: def, options: pairs };
}

export function sampleJson() {
  return '{"name":"深研君","vip":true,"level":9,"balance":128.5,"tags":["dev","tools"],"address":{"city":"Hangzhou","zip":"310000"},"note":null}';
}

/** 十六进制展示辅助：bytes -> "aa bb cc" 或 "aabbcc" */
export function bytesToHex(bytes, sep = '') {
  return Array.from(bytes, (b) => b.toString(16).padStart(2, '0')).join(sep);
}

export function hexToBytes(hex) {
  const clean = String(hex).replace(/0x/gi, '').replace(/[^0-9a-fA-F]/g, '');
  if (!clean.length || clean.length % 2) throw new Error('Hex 格式不合法（长度需为偶数）');
  const out = new Uint8Array(clean.length / 2);
  for (let i = 0; i < out.length; i++) out[i] = parseInt(clean.slice(i * 2, i * 2 + 2), 16);
  return out;
}

export function utf8Encode(str) {
  return new TextEncoder().encode(str);
}

export function utf8Decode(bytes) {
  return new TextDecoder('utf-8').decode(bytes);
}

/** 纯文本按行拆分（统一 \n，去尾部空行） */
export function lines(text) {
  return String(text).replace(/\r\n/g, '\n').split('\n');
}

/** WebCrypto digest，返回 Uint8Array */
export async function shaBytes(algo, data) {
  const buf = typeof data === 'string' ? utf8Encode(data) : data;
  return new Uint8Array(await crypto.subtle.digest(algo, buf));
}

export const SHA_ALGOS = ['SHA-1', 'SHA-256', 'SHA-384', 'SHA-512'];

/** HMAC，返回 Uint8Array。key 为字符串。 */
export async function hmacBytes(algo, key, data) {
  const enc = new TextEncoder();
  const cryptoKey = await crypto.subtle.importKey(
    'raw',
    enc.encode(key),
    { name: 'HMAC', hash: algo },
    false,
    ['sign'],
  );
  return new Uint8Array(await crypto.subtle.sign('HMAC', cryptoKey, enc.encode(data)));
}

/** WebCrypto AES-CBC 加解密（PKCS#7），base64 输入输出 */
export async function aesCrypt(action, text, key, ivB64) {
  const enc = new TextEncoder();
  const rawKey = utf8Encode(key);
  if (![16, 24, 32].includes(rawKey.length)) {
    throw new Error(`AES 密钥长度需为 16/24/32 字节（UTF-8），当前 ${rawKey.length}`);
  }
  const cryptoKey = await crypto.subtle.importKey('raw', rawKey, { name: 'AES-CBC' }, false, [action]);
  let data;
  let iv;
  if (action === 'encrypt') {
    data = enc.encode(text);
    iv = crypto.getRandomValues(new Uint8Array(16));
  } else {
    data = b64ToBytes(text.trim());
    iv = ivB64 ? b64ToBytes(ivB64) : rawKey.slice(0, 16).padEnd(16, 0);
    if (iv.length !== 16) throw new Error('IV 需为 16 字节');
  }
  const out = new Uint8Array(await crypto.subtle[action]({ name: 'AES-CBC', iv }, cryptoKey, data));
  if (action === 'encrypt') {
    return { result: bytesToB64(out), iv: bytesToB64(iv) };
  }
  return { result: utf8Decode(out), iv: null };
}

export function bytesToB64(bytes) {
  let bin = '';
  for (const b of bytes) bin += String.fromCharCode(b);
  return btoa(bin);
}

export function b64ToBytes(b64) {
  const bin = atob(b64.replace(/\s+/g, ''));
  const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}
