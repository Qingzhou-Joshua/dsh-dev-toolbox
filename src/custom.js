/**
 * dsh-dev-toolbox — custom 工具渲染器（文件类/交互类工具的专属 UI）。
 */
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { bytesToHex, utf8Encode } from './shared.js';

const h = React.createElement;

const boxStyle = {
  flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', gap: 10,
  padding: 12, borderRadius: 'var(--dsw-radius-md)',
  border: '1px dashed var(--dsw-alias-border-l1)', overflow: 'auto',
};

function useCopy() {
  const [copied, setCopied] = useState('');
  const copy = useCallback((text, tag = '✓') => {
    navigator.clipboard?.writeText(text).then(() => {
      setCopied(tag);
      setTimeout(() => setCopied(''), 1200);
    }).catch(() => {});
  }, []);
  return [copied, copy];
}

const btn = {
  border: '1px solid var(--dsw-alias-border-l1)', borderRadius: 'var(--dsw-radius-md)',
  padding: '5px 12px', fontSize: 12, cursor: 'pointer',
  background: 'var(--dsw-alias-bg-layer-1)', color: 'var(--dsw-alias-label-secondary)',
};

const mono = { fontFamily: 'var(--dsw-font-mono, monospace)', fontSize: 12, wordBreak: 'break-all' };

/* ---------- Base64 与图片 ---------- */

function B64Image() {
  const [mode, setMode] = useState('toB64');
  const [text, setText] = useState('');
  const [info, setInfo] = useState('');
  const [copied, copy] = useCopy();

  const onFile = (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    if (f.size > 3 * 1024 * 1024) { setInfo(`文件过大（${(f.size / 1024 / 1024).toFixed(1)}MB > 3MB），请选择更小的图片`); return; }
    const r = new FileReader();
    r.onload = () => {
      setText(String(r.result));
      setInfo(`${f.name} · ${f.type || '未知类型'} · ${(f.size / 1024).toFixed(1)} KB`);
    };
    r.readAsDataURL(f);
  };

  if (mode === 'toB64') {
    return h('div', { style: boxStyle },
      h('div', { style: { display: 'flex', gap: 8, alignItems: 'center' } },
        h('label', { style: { ...btn, display: 'inline-block' } },
          '选择图片文件',
          h('input', { type: 'file', accept: 'image/*', style: { display: 'none' }, onChange: onFile }),
        ),
        h('button', { style: btn, disabled: !text, onClick: () => copy(text) }, copied || '复制 Data URL'),
        info && h('span', { style: { fontSize: 12, color: 'var(--dsw-alias-label-tertiary)' } }, info),
      ),
      h('textarea', {
        style: { ...mono, flex: 1, minHeight: 80, resize: 'none', padding: 8, borderRadius: 'var(--dsw-radius-md)', border: '1px solid var(--dsw-alias-border-l1)', background: 'var(--dsw-alias-bg-layer-1)', color: 'var(--dsw-alias-label-primary)', outline: 'none' },
        value: text, readOnly: true, placeholder: 'Data URL 将在这里生成…',
      }),
      text && h('img', { src: text, alt: '预览', style: { maxWidth: '100%', maxHeight: 180, borderRadius: 6 } }),
      h('button', { style: { ...btn, alignSelf: 'flex-start' }, onClick: () => setMode('toImg') }, '反向：Base64 → 图片'),
    );
  }
  return h('div', { style: boxStyle },
    h('div', { style: { fontSize: 12, color: 'var(--dsw-alias-label-tertiary)' } }, '粘贴 Data URL 或纯 Base64：'),
    h('textarea', {
      style: { ...mono, flex: 1, minHeight: 80, resize: 'none', padding: 8, borderRadius: 'var(--dsw-radius-md)', border: '1px solid var(--dsw-alias-border-l1)', background: 'var(--dsw-alias-bg-layer-1)', color: 'var(--dsw-alias-label-primary)', outline: 'none' },
      value: text, spellCheck: false,
      placeholder: 'data:image/png;base64,…',
      onChange: (e) => setText(e.target.value),
    }),
    /^data:image\//.test(text.trim()) || /^([A-Za-z0-9+/=\s]{50,})$/.test(text.trim())
      ? h('img', {
        src: text.trim().startsWith('data:') ? text.trim() : `data:image/png;base64,${text.trim().replace(/\s+/g, '')}`,
        alt: '解码结果', style: { maxWidth: '100%', maxHeight: 260, borderRadius: 6 },
        onError: () => setInfo('解码失败：不是有效的图片'),
      })
      : null,
    info && h('div', { style: { fontSize: 12, color: 'var(--dsw-alias-state-error-primary)' } }, info),
    h('button', { style: { ...btn, alignSelf: 'flex-start' }, onClick: () => { setMode('toB64'); setInfo(''); } }, '反向：图片 → Base64'),
  );
}

/* ---------- 文件 Hash ---------- */

async function hashFile(file) {
  const buf = await file.arrayBuffer();
  const bytes = new Uint8Array(buf);
  const rows = [`文件: ${file.name}（${(file.size / 1024).toFixed(2)} KB）`];
  // MD5
  const { md5FileBytes } = await import('./md5.js');
  rows.push(`MD5    : ${bytesToHex(md5FileBytes(bytes))}`);
  for (const algo of ['SHA-1', 'SHA-256', 'SHA-512']) {
    const d = new Uint8Array(await crypto.subtle.digest(algo, buf));
    rows.push(`${algo.padEnd(6)}: ${bytesToHex(d)}`);
  }
  // CRC32
  let crc = 0xffffffff;
  for (const b of bytes) {
    crc ^= b;
    for (let k = 0; k < 8; k++) crc = crc & 1 ? (crc >>> 1) ^ 0xedb88320 : crc >>> 1;
  }
  rows.push(`CRC32  : ${((crc ^ 0xffffffff) >>> 0).toString(16).padStart(8, '0')}`);
  return rows.join('\n');
}

function FileHash() {
  const [result, setResult] = useState('');
  const [busy, setBusy] = useState(false);
  const [copied, copy] = useCopy();
  const onFile = async (e) => {
    const f = e.target.files && e.target.files[0];
    if (!f) return;
    if (f.size > 64 * 1024 * 1024) { setResult('文件超过 64MB，拒绝处理'); return; }
    setBusy(true);
    try { setResult(await hashFile(f)); } catch (err) { setResult(`失败: ${err.message}`); }
    setBusy(false);
  };
  return h('div', { style: boxStyle },
    h('div', { style: { display: 'flex', gap: 8, alignItems: 'center' } },
      h('label', { style: { ...btn, display: 'inline-block' } },
        busy ? '计算中…' : '选择文件（≤64MB，本地计算）',
        h('input', { type: 'file', style: { display: 'none' }, onChange: onFile, disabled: busy }),
      ),
      result && !busy ? h('button', { style: btn, onClick: () => copy(result) }, copied || '复制') : null,
    ),
    h('pre', { style: { ...mono, margin: 0, whiteSpace: 'pre-wrap' } }, result || 'MD5 / SHA-1 / SHA-256 / SHA-512 / CRC32'),
  );
}

/* ---------- 屏幕取色 ---------- */

function ColorPicker() {
  const [color, setColor] = useState('');
  const [err, setErr] = useState('');
  const [copied, copy] = useCopy();
  const pick = async () => {
    setErr('');
    if (!window.EyeDropper) {
      setErr('当前浏览器不支持 EyeDropper API（需 Chrome/Edge 95+）');
      return;
    }
    try {
      const r = await new window.EyeDropper().open();
      setColor(r.sRGBHex);
    } catch { /* 用户取消 */ }
  };
  return h('div', { style: { ...boxStyle, alignItems: 'center', justifyContent: 'center', gap: 14 } },
    h('button', { style: { ...btn, fontSize: 13, padding: '8px 18px' }, onClick: pick }, '🎨 从屏幕取色'),
    color && h('div', { style: { display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer' }, onClick: () => copy(color) },
      h('span', { style: { width: 42, height: 42, borderRadius: 8, background: color, border: '1px solid var(--dsw-alias-border-l2)' } }),
      h('span', { style: { ...mono, fontSize: 14 } }, color),
    ),
    copied && h('span', { style: { fontSize: 12, color: 'var(--dsw-alias-state-success-primary)' } }, '已复制 ✓'),
    err && h('span', { style: { fontSize: 12, color: 'var(--dsw-alias-state-error-primary)' } }, err),
  );
}

/* ---------- 键盘测试 ---------- */

function KeyboardTest() {
  const [events, setEvents] = useState([]);
  const ref = useRef(null);
  useEffect(() => { ref.current?.focus(); }, []);
  const onKey = (e) => {
    if (e.key === 'Tab') e.preventDefault();
    const mods = [e.ctrlKey && 'Ctrl', e.metaKey && 'Meta', e.altKey && 'Alt', e.shiftKey && 'Shift'].filter(Boolean).join('+');
    setEvents((p) => [{ key: e.key, code: e.code, keyCode: e.keyCode, mods: mods || '—' }, ...p].slice(0, 12));
  };
  return h('div', { style: { ...boxStyle, gap: 8 } },
    h('div', {
      ref, tabIndex: 0, onKeyDown: onKey,
      style: {
        flex: 1, minHeight: 90, outline: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--dsw-radius-md)', border: '1px solid var(--dsw-alias-border-l1)',
        background: 'var(--dsw-alias-bg-layer-1)', color: 'var(--dsw-alias-label-tertiary)', fontSize: 13, textAlign: 'center',
      },
    }, '点击此处获得焦点，然后随意按键（Tab 已拦截）'),
    h('table', { style: { fontSize: 12, borderCollapse: 'collapse', color: 'var(--dsw-alias-label-secondary)' } },
      h('tr', null, ['key', 'code', 'keyCode', '修饰键'].map((t) => h('th', { key: t, style: { textAlign: 'left', padding: '2px 14px 2px 0' } }, t))),
      events.map((ev, i) => h('tr', { key: i },
        h('td', { style: { ...mono, paddingRight: 14 } }, ev.key),
        h('td', { style: { ...mono, paddingRight: 14 } }, ev.code),
        h('td', { style: { ...mono, paddingRight: 14 } }, String(ev.keyCode)),
        h('td', { style: mono }, ev.mods),
      )),
    ),
  );
}

/* ---------- 鼠标测试 ---------- */

function MouseTest() {
  const [events, setEvents] = useState([]);
  const onDown = (e) => {
    e.preventDefault();
    const names = { 0: '左键', 1: '中键', 2: '右键', 3: '后退', 4: '前进' };
    setEvents((p) => [`button=${e.button}（${names[e.button] ?? '未知'}） dbl=${e.detail} @ (${e.clientX}, ${e.clientY})`, ...p].slice(0, 10));
  };
  const onCtx = (e) => e.preventDefault();
  return h('div', { style: { ...boxStyle, gap: 8 } },
    h('div', {
      onMouseDown: onDown, onContextMenu: onCtx,
      style: {
        flex: 1, minHeight: 100, display: 'flex', alignItems: 'center', justifyContent: 'center',
        borderRadius: 'var(--dsw-radius-md)', border: '1px solid var(--dsw-alias-border-l1)',
        background: 'var(--dsw-alias-bg-layer-1)', color: 'var(--dsw-alias-label-tertiary)', fontSize: 13,
        userSelect: 'none', cursor: 'crosshair', textAlign: 'center',
      },
    }, '在此区域点击 / 右键 / 中键'),
    h('div', { style: { ...mono, whiteSpace: 'pre-wrap' } }, events.join('\n') || '（事件将显示在这里）'),
  );
}

const CUSTOM_RENDERERS = {
  'b64-image': B64Image,
  'file-hash': FileHash,
  'color-picker': ColorPicker,
  keyboard: KeyboardTest,
  mouse: MouseTest,
};

export function renderCustom(tool) {
  const C = CUSTOM_RENDERERS[tool?.custom];
  return C ? h(C) : null;
}
