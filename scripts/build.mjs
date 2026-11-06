/**
 * 构建脚本：esbuild 打包 client（react 外部依赖走 harness 的 require，
 * js-beautify 打进包内），再手工包 __ModuleLoader__ wrapper。
 */
import { build } from 'esbuild';
import { mkdirSync, writeFileSync, readFileSync, rmSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = dirname(fileURLToPath(import.meta.url));
const proj = join(root, '..');
const outDir = join(proj, 'dist');

mkdirSync(outDir, { recursive: true });

await build({
  entryPoints: [join(proj, 'src/client.js')],
  bundle: true,
  format: 'iife',
  globalName: '__dshDevToolboxBundle',
  external: ['react'],
  target: ['es2020'],
  outfile: join(outDir, 'client.body.js'),
  minify: false,
  logLevel: 'info',
});

const body = readFileSync(join(outDir, 'client.body.js'), 'utf8');

const client = `window.__ModuleLoader__.load({
	id: "dsh-dev-toolbox",
	factory: (require) => {
${body}
		const plugin = (__dshDevToolboxBundle && __dshDevToolboxBundle.default) ? __dshDevToolboxBundle.default : __dshDevToolboxBundle;
		return plugin;
	},
});
`;

writeFileSync(join(outDir, 'client.js'), client);
rmSync(join(outDir, 'client.body.js'));

// 语法自检
// eslint-disable-next-line no-new-func
new Function(readFileSync(join(outDir, 'client.js'), 'utf8'));
console.log(`[dsh-dev-toolbox] built dist/client.js (${(client.length / 1024).toFixed(1)} KB)`);
