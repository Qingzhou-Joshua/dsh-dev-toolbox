/**
 * 极简 DOMParser shim：只覆盖工具箱用到的解析路径（html-meta / html-table 的容错解析）。
 * 通过正则抽取 <title>、<meta> 标签，querySelector/querySelectorAll 返回轻量节点对象。
 */

function attrString(el) {
  if (!el) return '';
  return el.attrs || '';
}

function makeNode(tag, attrs, text) {
  return {
    tagName: tag,
    textContent: text || '',
    getAttribute(name) {
      const m = new RegExp(`${name}\\s*=\\s*"([^"]*)"|${name}\\s*=\\s*'([^']*)'`).exec(attrs || '');
      return m ? (m[1] ?? m[2] ?? '') : null;
    },
    hasAttribute(name) {
      return this.getAttribute(name) !== null;
    },
  };
}

export class DOMParserShim {
  parseFromString(html) {
    const self = this;
    return {
      querySelector(sel) {
        if (sel === 'title') {
          const m = /<title[^>]*>([\s\S]*?)<\/title>/i.exec(html);
          return m ? makeNode('title', m[0], m[1].trim()) : null;
        }
        // meta[name=xxx] / meta[property=xxx]
        const mm = /name\s*=\s*["']([^"']+)["']|property\s*=\s*["']([^"']+)["']/.exec(sel);
        if (mm) {
          const key = mm[1] || mm[2];
          const re = new RegExp(`<meta[^>]*(?:name|property)\\s*=\\s*["']${key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'][^>]*>`, 'i');
          const m = re.exec(html);
          return m ? makeNode('meta', m[0]) : null;
        }
        return null;
      },
      querySelectorAll(sel) {
        if (/^meta/i.test(sel)) {
          const out = [];
          const re = /<meta\b[^>]*>/gi;
          let m;
          while ((m = re.exec(html))) out.push(makeNode('meta', m[0]));
          return out;
        }
        const one = self.parseFromString(html).querySelector(sel);
        return one ? [one] : [];
      },
      body: { textContent: html.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() },
      head: { innerHTML: '' },
      title: (/<title[^>]*>([\s\S]*?)<\/title>/i.exec(html) || [])[1]?.trim() || '',
    };
  }
}
