/**
 * dsh-dev-toolbox — 侧边栏工具箱 UI。
 * 纯 React（createElement），全部样式走 DSW 主题令牌，跟随明暗主题。
 */
import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { GROUPS, TOOLS, getTool } from './tools.js';
import { renderCustom } from './custom.js';

const h = React.createElement;

const LS_KEY = 'dsh-dev-toolbox:active-tool';

/* ---------- 基础样式（主题令牌） ---------- */

const S = {
  root: { display: 'flex', width: '100%', height: '100%', minHeight: 0, overflow: 'hidden', fontFamily: 'var(--dsw-font-family)' },
  side: {
    width: 208, flexShrink: 0, display: 'flex', flexDirection: 'column', minHeight: 0,
    borderRight: '1px solid var(--dsw-alias-border-l1)', background: 'var(--dsw-alias-bg-layer-1)',
  },
  search: {
    margin: 12, padding: '6px 10px', borderRadius: 'var(--dsw-radius-md)',
    border: '1px solid var(--dsw-alias-border-l1)', outline: 'none', fontSize: 13,
    background: 'var(--dsw-alias-bg-base)', color: 'var(--dsw-alias-label-primary)',
  },
  sideScroll: { flex: 1, overflowY: 'auto', minHeight: 0, paddingBottom: 12 },
  groupHeader: {
    display: 'flex', alignItems: 'center', gap: 6, width: '100%',
    padding: '12px 14px 6px', border: 'none', cursor: 'pointer', userSelect: 'none',
    background: 'transparent', textAlign: 'left',
  },
  groupLabel: {
    fontSize: 11, letterSpacing: 1.5,
    color: 'var(--dsw-alias-label-tertiary)', fontWeight: 700,
  },
  groupArrow: {
    fontSize: 10, color: 'var(--dsw-alias-label-tertiary)', width: 10, flexShrink: 0,
  },
  groupRule: { height: 1, margin: '0 14px', background: 'var(--dsw-alias-border-l1)', opacity: 0.5 },
  item: {
    display: 'block', width: '100%', textAlign: 'left', padding: '7px 14px 7px 30px', fontSize: 13,
    border: 'none', cursor: 'pointer', background: 'transparent',
    color: 'var(--dsw-alias-label-secondary)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis',
  },
  itemActive: { background: 'var(--dsw-alias-interactive-bg-active)', color: 'var(--dsw-alias-brand-primary)', fontWeight: 600 },
  main: { flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column', minHeight: 0, padding: '14px 16px', gap: 10 },
  title: { fontSize: 16, fontWeight: 700, color: 'var(--dsw-alias-label-primary)', margin: 0 },
  desc: { fontSize: 12, color: 'var(--dsw-alias-label-tertiary)', margin: 0 },
  optRow: { display: 'flex', flexWrap: 'wrap', gap: 10, alignItems: 'center' },
  optLabel: { fontSize: 12, color: 'var(--dsw-alias-label-tertiary)', flexShrink: 0 },
  seg: {
    display: 'inline-flex', borderRadius: 999, overflow: 'hidden',
    border: '1px solid var(--dsw-alias-border-l1)',
  },
  segBtn: {
    border: 'none', cursor: 'pointer', padding: '4px 12px', fontSize: 12,
    background: 'transparent', color: 'var(--dsw-alias-label-secondary)',
  },
  segBtnOn: { background: 'var(--dsw-alias-interactive-bg-active)', color: 'var(--dsw-alias-brand-primary)', fontWeight: 600 },
  textOpt: {
    padding: '4px 10px', fontSize: 12, borderRadius: 'var(--dsw-radius-md)',
    border: '1px solid var(--dsw-alias-border-l1)', outline: 'none', minWidth: 180,
    background: 'var(--dsw-alias-bg-base)', color: 'var(--dsw-alias-label-primary)',
  },
  switchWrap: { display: 'inline-flex', alignItems: 'center', gap: 6, cursor: 'pointer', fontSize: 12, color: 'var(--dsw-alias-label-secondary)' },
  panes: { flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column', gap: 10 },
  paneLabel: { fontSize: 12, color: 'var(--dsw-alias-label-tertiary)', marginBottom: 4 },
  ta: {
    flex: 1, minHeight: 0, width: '100%', boxSizing: 'border-box', resize: 'none',
    padding: 10, fontSize: 12, lineHeight: 1.55, fontFamily: 'var(--dsw-font-mono, monospace)',
    borderRadius: 'var(--dsw-radius-md)', border: '1px solid var(--dsw-alias-border-l1)',
    background: 'var(--dsw-alias-bg-layer-1)', color: 'var(--dsw-alias-label-primary)', outline: 'none',
  },
  btnBar: { display: 'flex', gap: 8, alignItems: 'center', flexShrink: 0 },
  btn: {
    border: '1px solid var(--dsw-alias-border-l1)', borderRadius: 'var(--dsw-radius-md)',
    padding: '5px 12px', fontSize: 12, cursor: 'pointer',
    background: 'var(--dsw-alias-bg-layer-1)', color: 'var(--dsw-alias-label-secondary)',
  },
  btnPrimary: {
    border: 'none', borderRadius: 'var(--dsw-radius-md)', padding: '5px 14px', fontSize: 12,
    cursor: 'pointer', background: 'var(--dsw-alias-button-primary-fill)', color: '#fff', fontWeight: 600,
  },
  err: { fontSize: 12, color: 'var(--dsw-alias-state-error-primary)', flexShrink: 0 },
  empty: {
    flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
    color: 'var(--dsw-alias-label-dimmed)', fontSize: 13,
  },
};

function segOn(on) {
  return { ...S.segBtn, ...(on ? S.segBtnOn : null) };
}

/* ---------- 控件 ---------- */

function Segment({ label, value, options, onChange }) {
  return h('div', { style: { display: 'inline-flex', alignItems: 'center', gap: 6 } },
    h('span', { style: S.optLabel }, label),
    h('div', { style: S.seg },
      options.map((o) => h('button', {
        key: o.value, style: segOn(value === o.value), title: o.label,
        onClick: () => onChange(o.value),
      }, o.label)),
    ),
  );
}

function TextOption({ label, value, placeholder, onChange }) {
  return h('div', { style: { display: 'inline-flex', alignItems: 'center', gap: 6 } },
    h('span', { style: S.optLabel }, label),
    h('input', { style: S.textOpt, value, placeholder, onChange: (e) => onChange(e.target.value) }),
  );
}

function SwitchOption({ label, value, onChange }) {
  return h('label', { style: S.switchWrap, onClick: () => onChange(!value) },
    h('span', {
      style: {
        width: 30, height: 17, borderRadius: 999, position: 'relative', flexShrink: 0,
        background: value ? 'var(--dsw-alias-brand-primary)' : 'var(--dsw-alias-border-l2)',
        transition: 'background .15s',
      },
    },
    h('span', {
      style: {
        position: 'absolute', top: 2, left: value ? 15 : 2, width: 13, height: 13,
        borderRadius: '50%', background: '#fff', transition: 'left .15s',
      },
    })),
    label,
  );
}

/* ---------- 主面板 ---------- */

function defaultOpts(tool) {
  const o = {};
  for (const op of tool.options || []) o[op.key] = op.default;
  return o;
}

function ToolboxApp() {
  const [activeId, setActiveId] = useState(() => {
    try { return localStorage.getItem(LS_KEY) || TOOLS[0].id; } catch { return TOOLS[0].id; }
  });
  const [query, setQuery] = useState('');
  const tool = useMemo(() => getTool(activeId), [activeId]);
  const [input, setInput] = useState('');
  const [opts, setOpts] = useState(() => defaultOpts(getTool(activeId)));
  const [output, setOutput] = useState('');
  const [htmlOut, setHtmlOut] = useState('');
  const [error, setError] = useState('');
  const [copied, setCopied] = useState(false);
  // 折叠的分组 id 列表（持久化；首次打开默认全部折叠）
  const [collapsed, setCollapsed] = useState(() => {
    try {
      const saved = localStorage.getItem('dsh-toolbox-collapsed');
      if (saved !== null) return JSON.parse(saved);
    } catch { /* ignore */ }
    return GROUPS.map((g) => g.id); // 默认全折叠
  });

  const toggleGroup = useCallback((gid) => {
    setCollapsed((prev) => {
      const next = prev.includes(gid) ? prev.filter((x) => x !== gid) : [...prev, gid];
      try { localStorage.setItem('dsh-toolbox-collapsed', JSON.stringify(next)); } catch { /* ignore */ }
      return next;
    });
  }, []);

  const selectTool = useCallback((t) => {
    setActiveId(t.id);
    // 从搜索结果点选时，确保所属分组展开
    setCollapsed((prev) => {
      if (!prev.includes(t.group)) return prev;
      const next = prev.filter((x) => x !== t.group);
      try { localStorage.setItem('dsh-toolbox-collapsed', JSON.stringify(next)); } catch { /* ignore */ }
      return next;
    });
  }, []);
  const runTimer = useRef(0);
  const runToken = useRef(0);

  // 切换工具：重置选项与结果，保留输入
  useEffect(() => {
    setOpts(defaultOpts(tool));
    setOutput(''); setHtmlOut(''); setError(''); setCopied(false);
    try { localStorage.setItem(LS_KEY, tool.id); } catch { /* ignore */ }
  }, [tool]);

  const doRun = useCallback((text, o) => {
    const token = ++runToken.current;
    if (!text.trim() && !tool.custom) { setOutput(''); setHtmlOut(''); setError(''); return; }
    try {
      const r = tool.run(text, o);
      if (r && typeof r.then === 'function') {
        r.then((res) => {
          if (token !== runToken.current) return; // 已有过时结果
          if (res && typeof res === 'object' && 'html' in res) {
            setHtmlOut(String(res.html)); setOutput(''); setError('');
          } else {
            setOutput(String(res)); setHtmlOut(''); setError('');
          }
        }).catch((e) => {
          if (token !== runToken.current) return;
          setOutput(''); setHtmlOut('');
          setError(e && e.message ? e.message : String(e));
        });
      } else if (r && typeof r === 'object' && 'html' in r) {
        setHtmlOut(String(r.html)); setOutput(''); setError('');
      } else {
        setOutput(String(r)); setHtmlOut(''); setError('');
      }
    } catch (e) {
      setOutput(''); setHtmlOut('');
      setError(e && e.message ? e.message : String(e));
    }
  }, [tool]);

  // 自动执行（输入/选项变化，300ms 防抖）
  useEffect(() => {
    clearTimeout(runTimer.current);
    runTimer.current = setTimeout(() => doRun(input, opts), 300);
    return () => clearTimeout(runTimer.current);
  }, [input, opts, doRun]);

  const copyOut = useCallback(() => {
    if (!output) return;
    navigator.clipboard?.writeText(output).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    }).catch(() => {});
  }, [output]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GROUPS.map((g) => ({
      ...g,
      tools: TOOLS.filter((t) => t.group === g.id && (!q || t.title.toLowerCase().includes(q) || t.id.includes(q))),
    })).filter((g) => g.tools.length);
  }, [query]);

  const hasActionButtons = (tool.options || []).some((o) => o.type === 'segment' && o.key === 'action');

  return h('div', { style: S.root },
    // 左侧工具列表
    h('div', { style: S.side },
      h('input', {
        style: S.search, placeholder: '搜索工具…', value: query,
        onChange: (e) => setQuery(e.target.value),
      }),
      h('div', { style: S.sideScroll },
        filtered.map((g) => {
          const isCollapsed = !query.trim() && collapsed.includes(g.id);
          return h('div', { key: g.id },
            h('button', {
              style: S.groupHeader, title: isCollapsed ? '展开分组' : '折叠分组',
              onClick: () => toggleGroup(g.id),
            },
            h('span', { style: S.groupArrow }, isCollapsed ? '▸' : '▾'),
            h('span', { style: S.groupLabel }, g.label),
            ),
            !isCollapsed && h('div', { style: S.groupRule }),
            !isCollapsed && g.tools.map((t) => h('button', {
              key: t.id, style: { ...S.item, ...(t.id === activeId ? S.itemActive : null) },
              title: t.desc, onClick: () => selectTool(t),
            }, t.title)),
          );
        }),
        !filtered.length && h('div', { style: { ...S.groupLabel, paddingTop: 16 } }, '没有匹配的工具'),
      ),
    ),
    // 右侧工作区
    h('div', { style: S.main },
      h('h3', { style: S.title }, tool.title),
      h('p', { style: S.desc }, tool.desc),
      (tool.options || []).length > 0 && h('div', { style: S.optRow },
        tool.options.map((op) => {
          if (op.type === 'segment') {
            return h(Segment, {
              key: op.key, label: op.label, options: op.options, value: opts[op.key],
              onChange: (v) => setOpts((p) => ({ ...p, [op.key]: v })),
            });
          }
          if (op.type === 'switch') {
            return h(SwitchOption, {
              key: op.key, label: op.label, value: !!opts[op.key],
              onChange: (v) => setOpts((p) => ({ ...p, [op.key]: v })),
            });
          }
          if (op.type === 'text') {
            return h(TextOption, {
              key: op.key, label: op.label, value: String(opts[op.key] ?? ''),
              placeholder: op.placeholder || '',
              onChange: (v) => setOpts((p) => ({ ...p, [op.key]: v })),
            });
          }
          return null;
        }),
      ),
      h('div', { style: S.panes },
        tool.custom ? renderCustom(tool) : h('div', { style: { flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' } },
          h('div', { style: S.paneLabel }, '输入'),
          h('textarea', {
            style: S.ta, value: input, spellCheck: false,
            placeholder: `输入 ${tool.title} 内容，或点击「示例」填充…`,
            onChange: (e) => setInput(e.target.value),
          }),
        ),
        h('div', { style: S.btnBar },
          !tool.custom && h('button', {
            style: S.btn,
            onClick: () => { setInput(tool.sample || ''); setCopied(false); },
          }, '示例'),
          !tool.custom && h('button', { style: S.btn, onClick: () => { setInput(''); setOutput(''); setHtmlOut(''); setError(''); } }, '清空'),
          h('div', { style: { flex: 1 } }),
          hasActionButtons || tool.custom ? null : h('button', { style: S.btnPrimary, onClick: () => doRun(input, opts) }, '执行'),
          !tool.custom && h('button', { style: { ...S.btn, ...(copied ? { color: 'var(--dsw-alias-state-success-primary)' } : null) }, onClick: copyOut, disabled: !output },
            copied ? '已复制 ✓' : '复制结果'),
        ),
        h('div', { style: { flex: 1, minHeight: 0, display: 'flex', flexDirection: 'column' } },
          h('div', { style: S.paneLabel }, '输出'),
          htmlOut
            ? h('div', {
              style: { ...S.ta, overflow: 'auto' },
              dangerouslySetInnerHTML: { __html: htmlOut },
            })
            : h('textarea', { style: { ...S.ta, background: 'var(--dsw-alias-bg-base)' }, value: output, readOnly: true, spellCheck: false, placeholder: '结果将在这里自动生成…' }),
        ),
      ),
      error && h('div', { style: S.err }, `⚠ ${error}`),
    ),
  );
}

export { ToolboxApp };
