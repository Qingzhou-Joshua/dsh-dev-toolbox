/**
 * dsh-dev-toolbox — client 入口。
 * esbuild 打包为 iife（globalName），由 scripts/build.mjs 手工包进
 * window.__ModuleLoader__.load({ id, factory }) wrapper，factory 返回本默认导出。
 */
import React from 'react';
import { ToolboxApp } from './toolbox.js';

const h = React.createElement;

const descriptor = {
  id: 'dsh-dev-toolbox:main',
  title: '工具箱',
  description: 'JSON / 代码格式化 / URL 常用开发工具（本地执行）',
  order: 60,
  single: true,
  icon: (size) => h(
    'span',
    { style: { fontSize: Math.round(size * 0.86), lineHeight: 1 }, role: 'img', 'aria-label': '工具箱' },
    '🧰',
  ),
  component() {
    return h(ToolboxApp);
  },
};

export default {
  name: 'dsh-dev-toolbox',
  inject: ['betterSidebar'],
  apply(ctx) {
    // registerTab 返回 disposer，cordis 在 fiber 释放时自动调用（HMR 安全）
    ctx.effect(() => ctx.betterSidebar.registerTab(descriptor));
  },
};
