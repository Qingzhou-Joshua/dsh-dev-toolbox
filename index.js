/**
 * dsh-dev-toolbox 宿主半（空壳）。
 * 本插件为纯 client 插件：所有功能在 dsh web 客户端内通过
 * `ctx.betterSidebar.registerTab()` 挂载侧边栏 tab，宿主进程无需逻辑。
 * 此处仅提供一个空 cordis 插件以满足 bundle loader 行的 name 加载。
 */
export const name = 'dev-toolbox-host';

export function apply() {
  // no-op
}
