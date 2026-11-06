import jsb from 'js-beautify';
/**
 * v0.1.0 遗留工具（从旧 bundle 提取）：JSON / 格式化 / URL 三组 23 个工具。
 */
import beautify from 'js-beautify';
// (js-beautify 由下方 bundle 提取代码自带绑定)
  var import_js_beautify = { default: jsb };
  var INDENTS = {
    "2": "  ",
    "4": "    ",
    tab: "	"
  };
  function indentUnit(opt) {
    return INDENTS[opt.indent] || INDENTS["2"];
  }
  function parseJsonOrThrow(text) {
    try {
      return JSON.parse(text);
    } catch (e) {
      throw new Error(`JSON \u89E3\u6790\u5931\u8D25\uFF1A${e.message}`);
    }
  }
  function stringify(value, unit) {
    return JSON.stringify(value, null, unit);
  }
  function pascal(s) {
    return String(s).replace(/[^A-Za-z0-9]+(.)?/g, (_, c) => c ? c.toUpperCase() : "").replace(/^./, (c) => c.toUpperCase()) || "Item";
  }
  function camel(s) {
    const p = pascal(s);
    return p.charAt(0).toLowerCase() + p.slice(1);
  }
  function inferType(value, classes, typeName) {
    if (value === null) return { ts: "unknown", java: "Object", cs: "object", go: "any", swift: "Any?" };
    if (Array.isArray(value)) {
      const el = value.length ? inferType(value[0], classes, typeName) : null;
      return {
        ts: el ? `${el.ts}[]` : "unknown[]",
        java: `List<${el ? el.java : "Object"}>`,
        cs: `List<${el ? el.cs : "object"}>`,
        go: el ? `[]${el.go === "any" ? "interface{}" : el.go}` : "[]interface{}",
        swift: el ? `[${el.swift}]` : "[Any]",
        element: el
      };
    }
    if (typeof value === "object") {
      const name = pascal(typeName);
      if (!classes.some((c) => c.name === name)) {
        const cls = { name, fields: [] };
        classes.push(cls);
        for (const [k, v] of Object.entries(value)) {
          cls.fields.push({ key: k, ...inferType(v, classes, k) });
        }
      }
      return { ts: name, java: name, cs: name, go: name, swift: name, isClass: true, className: name };
    }
    if (typeof value === "number") return { ts: "number", java: "double", cs: "double", go: "float64", swift: "Double" };
    if (typeof value === "boolean") return { ts: "boolean", java: "boolean", cs: "bool", go: "bool", swift: "Bool" };
    return { ts: "string", java: "String", cs: "string", go: "string", swift: "String" };
  }
  function genEntities(root, lang) {
    const classes = [];
    const rootType = inferType(root, classes, "Root");
    const unit = "    ";
    const lines = [];
    if (lang === "typescript") {
      const emit = (cls) => {
        lines.push(`export interface ${cls.name} {`);
        for (const f of cls.fields) lines.push(`${unit}${f.key}: ${f.ts};`);
        lines.push("}", "");
      };
      [...classes].reverse().forEach(emit);
      if (rootType.isClass === void 0) {
        lines.unshift(`// \u6839\u8282\u70B9\u7C7B\u578B\uFF1A${rootType.ts}`);
      }
      return lines.join("\n").trim() + "\n";
    }
    if (lang === "go") {
      const emit = (cls) => {
        lines.push(`type ${cls.name} struct {`);
        for (const f of cls.fields) {
          lines.push(`${unit}${pascal(f.key)} ${f.go} \`json:"${f.key}"\``);
        }
        lines.push("}", "");
      };
      [...classes].reverse().forEach(emit);
      return lines.join("\n").trim() + "\n";
    }
    const syntax = {
      java: {
        field: (f) => `${unit}private ${f.java} ${camel(f.key)};`,
        open: (n) => `public class ${n} {`,
        close: "}",
        blank: 1
      },
      csharp: {
        field: (f) => `${unit}public ${f.cs} ${pascal(f.key)} { get; set; }`,
        open: (n) => `public class ${n}`,
        close: "}",
        blank: 1
      },
      swift: {
        field: (f) => `${unit}var ${camel(f.key)}: ${f.swift}`,
        open: (n) => `public struct ${n} {`,
        close: "}",
        blank: 1
      }
    }[lang];
    for (const cls of [...classes].reverse()) {
      lines.push(syntax.open(cls.name) + (lang === "csharp" ? "" : ""));
      if (lang === "csharp") lines.push("{");
      for (const f of cls.fields) lines.push(syntax.field(f));
      lines.push(syntax.close, "");
    }
    return lines.join("\n").trimEnd() + "\n";
  }
  var SQL_MAJOR = /* @__PURE__ */ new Set([
    "SELECT",
    "FROM",
    "WHERE",
    "GROUP BY",
    "ORDER BY",
    "HAVING",
    "LIMIT",
    "OFFSET",
    "LEFT JOIN",
    "LEFT OUTER JOIN",
    "RIGHT JOIN",
    "RIGHT OUTER JOIN",
    "FULL JOIN",
    "FULL OUTER JOIN",
    "INNER JOIN",
    "CROSS JOIN",
    "JOIN",
    "UNION",
    "UNION ALL",
    "INSERT INTO",
    "VALUES",
    "UPDATE",
    "SET",
    "DELETE FROM",
    "ON"
  ]);
  function formatSql(text, unit) {
    const src = text.replace(/\r\n/g, " ").replace(/\s+/g, " ").trim();
    if (!src) throw new Error("\u8F93\u5165\u4E3A\u7A7A");
    const tokens = [];
    for (const word of src.split(" ")) {
      let t = word;
      while (t.includes(",")) {
        const i = t.indexOf(",");
        if (i > 0) tokens.push(t.slice(0, i));
        tokens.push(",");
        t = t.slice(i + 1);
      }
      if (t) tokens.push(t);
    }
    const lines = [];
    let mode = "normal";
    let contIndent = 0;
    let line = "";
    const flush = () => {
      if (line.trim()) lines.push(unit.repeat(contIndent) + line.trim());
      line = "";
    };
    for (let i = 0; i < tokens.length; i++) {
      let tok = tokens[i];
      let kw = null;
      const two = `${tok} ${tokens[i + 1] || ""}`.toUpperCase();
      if (SQL_MAJOR.has(two)) {
        kw = two;
        tok = `${tok} ${tokens[++i]}`;
      } else {
        const up = tok.toUpperCase();
        if (SQL_MAJOR.has(up)) kw = up;
      }
      if (kw) {
        flush();
        if (kw === "ON" || kw === "SET") {
          contIndent = 1;
          lines.push(unit + kw);
          mode = kw === "SET" ? "normal" : "cond";
          continue;
        }
        if (kw === "GROUP BY" || kw === "ORDER BY") {
          contIndent = 0;
          line = kw;
          mode = "normal";
          continue;
        }
        contIndent = 0;
        lines.push(kw);
        mode = kw === "SELECT" ? "select" : kw === "WHERE" || kw === "HAVING" ? "cond" : "normal";
        contIndent = mode === "normal" ? 0 : 1;
        if (mode === "normal" || kw === "VALUES" || kw.startsWith("UNION")) contIndent = 0;
        continue;
      }
      if (tok === ",") {
        if (mode === "select") {
          flush();
        } else {
          line += ",";
        }
        continue;
      }
      if (mode === "cond" && /^(AND|OR)$/i.test(tok)) {
        flush();
        line = tok.toUpperCase();
        continue;
      }
      line += (line ? " " : "") + tok;
    }
    flush();
    return lines.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
  }
  function formatBraces(text, unit) {
    const src = text.replace(/\r\n/g, "\n");
    const out = [];
    let depth = 0;
    let line = "";
    let inS = false, sCh = "", inComment = false;
    const flush = () => {
      const t = line.trim();
      if (t) out.push(unit.repeat(Math.max(depth, 0)) + t);
      line = "";
    };
    for (let i = 0; i < src.length; i++) {
      const c = src[i], n = src[i + 1];
      if (inComment) {
        if (c === "\n") {
          flush();
          inComment = false;
        } else line += c;
        continue;
      }
      if (inS) {
        line += c;
        if (c === sCh && src[i - 1] !== "\\") inS = false;
        continue;
      }
      if (c === '"' || c === "'" || c === "`") {
        inS = true;
        sCh = c;
        line += c;
        continue;
      }
      if (c === "#") {
        inComment = true;
        line += c;
        continue;
      }
      if (c === "{") {
        line += " {";
        flush();
        depth++;
        continue;
      }
      if (c === "}") {
        flush();
        depth = Math.max(depth - 1, 0);
        out.push(unit.repeat(depth) + "}");
        continue;
      }
      if (c === ";") {
        line += ";";
        flush();
        continue;
      }
      if (c === "\n") {
        flush();
        continue;
      }
      line += c;
    }
    flush();
    return out.join("\n").replace(/\n{3,}/g, "\n\n").trimEnd() + "\n";
  }
  function tidyText(text) {
    const lines = text.replace(/\r\n/g, "\n").split("\n").map((l) => l.replace(/[ \t]+$/, ""));
    const out = [];
    for (const l of lines) {
      if (l === "" && out[out.length - 1] === "" && out[out.length - 2] === "") continue;
      out.push(l);
    }
    return out.join("\n").replace(/^\n+/, "").replace(/\n+$/, "\n");
  }
  function extractQuery(text) {
    const s = text.trim();
    const qIdx = s.indexOf("?");
    return qIdx >= 0 ? s.slice(qIdx + 1) : s;
  }
  function parseParams(text) {
    const q = extractQuery(text).split("#")[0];
    const pairs = [];
    for (const seg of q.split("&")) {
      if (!seg) continue;
      const eq = seg.indexOf("=");
      const k = eq >= 0 ? seg.slice(0, eq) : seg;
      const v = eq >= 0 ? seg.slice(eq + 1) : "";
      let dk, dv;
      try {
        dk = decodeURIComponent(k.replace(/\+/g, " "));
      } catch {
        dk = k;
      }
      try {
        dv = decodeURIComponent(v.replace(/\+/g, " "));
      } catch {
        dv = v;
      }
      pairs.push([dk, dv]);
    }
    return pairs;
  }
  function typedValue(v) {
    if (v === "true") return true;
    if (v === "false") return false;
    if (v === "null") return null;
    if (v !== "" && !Number.isNaN(Number(v))) return Number(v);
    return v;
  }
  var indentOption = {
    key: "indent",
    label: "\u7F29\u8FDB",
    type: "segment",
    default: "2",
    options: [
      { value: "2", label: "2 \u7A7A\u683C" },
      { value: "4", label: "4 \u7A7A\u683C" },
      { value: "tab", label: "Tab" }
    ]
  };
  function actionOption(def, pairs) {
    return { key: "action", label: "\u64CD\u4F5C", type: "segment", default: def, options: pairs };
  }
  function sampleJson() {
    return '{"name":"\u6DF1\u7814\u541B","vip":true,"level":9,"balance":128.5,"tags":["dev","tools"],"address":{"city":"Hangzhou","zip":"310000"},"note":null}';
  }
  var SAMPLE_JS = "function greet(n){const msg=`hello, ${n}`;if(!n){return null}return {msg,at:Date.now()}}";
  var SAMPLE_CSS = ":root{--fg:#333}.card{padding:16px;border:1px solid #eee;border-radius:8px}.card:hover{box-shadow:0 2px 8px rgba(0,0,0,.08)}";
  var SAMPLE_HTML = '<!DOCTYPE html><html><head><title>demo</title></head><body><div class="card"><h1>Hi</h1><p>toolbox</p></div></body></html>';
  var SAMPLE_XML = '<root><user id="1"><name>Alice</name><tags><t>dev</t><t>qa</t></tags></user></root>';
  var SAMPLE_SQL = 'select u.id,u.name,count(o.id) as cnt from users u left join orders o on o.user_id=u.id where u.status=1 and u.created_at>"2024-01-01" group by u.id,u.name having count(o.id)>3 order by cnt desc limit 20';
  var SAMPLE_C = 'int main(int argc,char**argv){for(int i=0;i<argc;i++){printf("%s\\n",argv[i]);}return 0;}';
  var SAMPLE_JAVA = "public class Demo{private String name;public String getName(){return name;}public void setName(String n){this.name=n;}}";
  var SAMPLE_CS = "public class Demo{public int Id{get;set;}public string Name{get;set;}}";
  var SAMPLE_PHP = '<?php function hello($n){if(!$n){return null;}return "hello ".$n;}';
  var SAMPLE_NGINX = "server{listen 80;server_name example.com;location /{proxy_pass http://127.0.0.1:3000;proxy_set_header Host $host;}}";
  var SAMPLE_YAML = "name: toolbox\nitems:\n- id: 1\n  name: json\n- id: 2\n  name:  url   \n";
  var SAMPLE_PY = 'def main():\n    items=[1,2,3]\n    for i in items:   \n        print(i)\n\n\n\nif __name__=="__main__":\n    main()';
  function beautifyTool(id, title, lang, sample, opts = {}) {
    return {
      id,
      group: "format",
      title,
      desc: opts.desc || `${title}\uFF0C\u57FA\u4E8E js-beautify\uFF0C\u672C\u5730\u6267\u884C`,
      sample,
      options: [indentOption],
      run(input, o) {
        if (!input.trim()) throw new Error("\u8F93\u5165\u4E3A\u7A7A");
        const bo = { indent_size: o.indent === "tab" ? 1 : Number(o.indent), indent_char: o.indent === "tab" ? "	" : " " };
        if (lang === "json") {
          return stringify(parseJsonOrThrow(input), indentUnit(o));
        }
        if (lang === "html" || lang === "xml") return import_js_beautify.default.html(input, { ...bo, wrap_line_length: 0 });
        if (lang === "css") return import_js_beautify.default.css(input, bo);
        return import_js_beautify.default.js(input, { ...bo, brace_style: "collapse" });
      }
    };
  }
  function makeUrlJsonTool(id, title, group, defaultAction) {
    return {
      id,
      group,
      title,
      desc: "JSON \u5BF9\u8C61\u4E0E URL \u67E5\u8BE2\u53C2\u6570\u53CC\u5411\u8F6C\u6362",
      sample: sampleJson(),
      options: [
        actionOption(defaultAction, [
          { value: "toUrl", label: "JSON \u2192 \u53C2\u6570" },
          { value: "toJson", label: "\u53C2\u6570 \u2192 JSON" }
        ]),
        { key: "typed", label: "\u503C\u7C7B\u578B\u63A8\u65AD", type: "switch", default: false },
        indentOption
      ],
      run(input, o) {
        if (!input.trim()) throw new Error("\u8F93\u5165\u4E3A\u7A7A");
        if (o.action === "toUrl") {
          const data = parseJsonOrThrow(input);
          if (typeof data !== "object" || data === null || Array.isArray(data)) throw new Error("\u6839\u8282\u70B9\u9700\u8981\u662F JSON \u5BF9\u8C61");
          const sp = new URLSearchParams();
          for (const [k, v] of Object.entries(data)) {
            sp.append(k, typeof v === "object" ? JSON.stringify(v) : String(v));
          }
          return decodeURIComponent(sp.toString()).replace(/&/g, "\n");
        }
        const pairs = parseParams(input);
        if (!pairs.length) throw new Error("\u672A\u89E3\u6790\u5230\u67E5\u8BE2\u53C2\u6570");
        const obj = {};
        for (const [k, v] of pairs) obj[k] = o.typed ? typedValue(v) : v;
        return stringify(obj, indentUnit(o));
      }
    };
  }
  var GROUPS = [
    { id: "json", label: "JSON", order: 0 },
    { id: "format", label: "\u683C\u5F0F\u5316", order: 1 },
    { id: "url", label: "URL", order: 2 }
  ];
  var TOOLS = [
    // ---- JSON 组 ----
    {
      id: "json-format",
      group: "json",
      title: "JSON \u683C\u5F0F\u5316",
      desc: "\u6821\u9A8C\u5E76\u683C\u5F0F\u5316 / \u538B\u7F29 JSON",
      sample: sampleJson(),
      options: [
        actionOption("pretty", [
          { value: "pretty", label: "\u683C\u5F0F\u5316" },
          { value: "minify", label: "\u538B\u7F29" }
        ]),
        indentOption
      ],
      run(input, o) {
        const data = parseJsonOrThrow(input);
        return o.action === "minify" ? JSON.stringify(data) : stringify(data, indentUnit(o));
      }
    },
    {
      id: "json-escape",
      group: "json",
      title: "JSON \u8F6C\u4E49",
      desc: "JSON \u6587\u672C\u4E0E\u5B57\u7B26\u4E32\u5B57\u9762\u91CF\u4E92\u8F6C\uFF08\u5D4C\u5165\u4EE3\u7801\u7528\uFF09",
      sample: sampleJson(),
      options: [
        actionOption("escape", [
          { value: "escape", label: "\u8F6C\u4E49" },
          { value: "unescape", label: "\u53BB\u8F6C\u4E49" }
        ])
      ],
      run(input, o) {
        if (!input.trim()) throw new Error("\u8F93\u5165\u4E3A\u7A7A");
        if (o.action === "escape") return JSON.stringify(input);
        let s = input.trim();
        if (!s.startsWith('"')) s = `"${s.replace(/\\"/g, '"').replace(/^"/, "").replace(/"$/, "")}"`;
        try {
          const v = JSON.parse(s);
          if (typeof v !== "string") throw new Error("\u7ED3\u679C\u4E0D\u662F\u5B57\u7B26\u4E32");
          return v;
        } catch (e) {
          throw new Error(`\u53BB\u8F6C\u4E49\u5931\u8D25\uFF1A${e.message}`);
        }
      }
    },
    makeUrlJsonTool("json-url", "JSON \u4E0E URL \u53C2\u6570 \u4E92\u8F6C", "json", "toUrl"),
    {
      id: "json-entity",
      group: "json",
      title: "JSON \u751F\u6210\u5B9E\u4F53\u7C7B",
      desc: "\u6839\u636E JSON \u63A8\u65AD\u7C7B\u578B\uFF0C\u751F\u6210\u5B9E\u4F53/\u7ED3\u6784\u4F53\u5B9A\u4E49",
      sample: sampleJson(),
      options: [
        {
          key: "lang",
          label: "\u76EE\u6807\u8BED\u8A00",
          type: "segment",
          default: "typescript",
          options: [
            { value: "typescript", label: "TS" },
            { value: "java", label: "Java" },
            { value: "csharp", label: "C#" },
            { value: "go", label: "Go" },
            { value: "swift", label: "Swift" }
          ]
        }
      ],
      run(input, o) {
        return genEntities(parseJsonOrThrow(input), o.lang);
      }
    },
    // ---- 格式化组 ----
    beautifyTool("fmt-html", "HTML \u683C\u5F0F\u5316", "html", SAMPLE_HTML),
    beautifyTool("fmt-javascript", "JavaScript \u683C\u5F0F\u5316", "js", SAMPLE_JS),
    beautifyTool("fmt-css", "CSS \u683C\u5F0F\u5316", "css", SAMPLE_CSS),
    beautifyTool("fmt-json", "JSON \u683C\u5F0F\u5316", "json", sampleJson(), { desc: "\u540C\u300CJSON \u7EC4\u300D\u7684\u683C\u5F0F\u5316\uFF0C\u72EC\u7ACB\u5165\u53E3" }),
    beautifyTool("fmt-xml", "XML \u683C\u5F0F\u5316", "xml", SAMPLE_XML, { desc: "XML/\u7C7B HTML \u6807\u8BB0\u683C\u5F0F\u5316\uFF08js-beautify html \u6A21\u5F0F\uFF09" }),
    beautifyTool("fmt-c", "C \u683C\u5F0F\u5316", "js", SAMPLE_C, { desc: "C \u7CFB\u5927\u62EC\u53F7\u98CE\u683C\u683C\u5F0F\u5316\uFF08js-beautify js \u6A21\u5F0F\uFF09" }),
    beautifyTool("fmt-cpp", "C++ \u683C\u5F0F\u5316", "js", SAMPLE_C, { desc: "C \u7CFB\u5927\u62EC\u53F7\u98CE\u683C\u683C\u5F0F\u5316\uFF08js-beautify js \u6A21\u5F0F\uFF09" }),
    beautifyTool("fmt-csharp", "C# \u683C\u5F0F\u5316", "js", SAMPLE_CS, { desc: "C \u7CFB\u5927\u62EC\u53F7\u98CE\u683C\u683C\u5F0F\u5316\uFF08js-beautify js \u6A21\u5F0F\uFF09" }),
    beautifyTool("fmt-java", "Java \u683C\u5F0F\u5316", "js", SAMPLE_JAVA, { desc: "C \u7CFB\u5927\u62EC\u53F7\u98CE\u683C\u683C\u5F0F\u5316\uFF08js-beautify js \u6A21\u5F0F\uFF09" }),
    beautifyTool("fmt-php", "PHP \u683C\u5F0F\u5316", "js", SAMPLE_PHP, { desc: "C \u7CFB\u5927\u62EC\u53F7\u98CE\u683C\u683C\u5F0F\u5316\uFF08js-beautify js \u6A21\u5F0F\uFF09" }),
    {
      id: "fmt-sql",
      group: "format",
      title: "SQL \u683C\u5F0F\u5316",
      desc: "\u8F7B\u91CF SQL \u6392\u7248\uFF1A\u4E3B\u8981\u5173\u952E\u5B57\u72EC\u5360\u4E00\u884C\u3001\u5B50\u53E5\u7F29\u8FDB",
      sample: SAMPLE_SQL,
      options: [indentOption],
      run(input, o) {
        if (!input.trim()) throw new Error("\u8F93\u5165\u4E3A\u7A7A");
        return formatSql(input, indentUnit(o));
      }
    },
    {
      id: "fmt-yaml",
      group: "format",
      title: "Yaml \u683C\u5F0F\u5316",
      desc: "\u5B89\u5168\u6574\u7406\uFF1A\u884C\u5C3E\u7A7A\u767D\u3001\u591A\u4F59\u7A7A\u884C\u5F52\u4E00\uFF08\u4E0D\u6539\u7F29\u8FDB\u8BED\u4E49\uFF09",
      sample: SAMPLE_YAML,
      options: [],
      run(input) {
        if (!input.trim()) throw new Error("\u8F93\u5165\u4E3A\u7A7A");
        return tidyText(input);
      }
    },
    {
      id: "fmt-python",
      group: "format",
      title: "Python \u683C\u5F0F\u5316",
      desc: "\u5B89\u5168\u6574\u7406\uFF1A\u884C\u5C3E\u7A7A\u767D\u3001\u591A\u4F59\u7A7A\u884C\u5F52\u4E00\uFF08\u4E0D\u6539\u7F29\u8FDB\u8BED\u4E49\uFF09",
      sample: SAMPLE_PY,
      options: [],
      run(input) {
        if (!input.trim()) throw new Error("\u8F93\u5165\u4E3A\u7A7A");
        return tidyText(input);
      }
    },
    {
      id: "fmt-nginx",
      group: "format",
      title: "Nginx \u683C\u5F0F\u5316",
      desc: "\u6309\u5927\u62EC\u53F7/\u5206\u53F7\u7F29\u8FDB\u6392\u7248 nginx \u914D\u7F6E",
      sample: SAMPLE_NGINX,
      options: [indentOption],
      run(input, o) {
        if (!input.trim()) throw new Error("\u8F93\u5165\u4E3A\u7A7A");
        return formatBraces(input, indentUnit(o));
      }
    },
    // ---- URL 组 ----
    {
      id: "url-params",
      group: "url",
      title: "URL \u53C2\u6570\u683C\u5F0F\u5316",
      desc: "\u67E5\u8BE2\u4E32\u9010\u884C\u5BF9\u9F50\u5C55\u793A\uFF0C\u652F\u6301\u76F4\u63A5\u7C98\u8D34\u5B8C\u6574 URL",
      sample: "https://example.com/search?q=dev%20toolbox&size=20&page=1&safe=true",
      options: [],
      run(input) {
        const pairs = parseParams(input);
        if (!pairs.length) throw new Error("\u672A\u89E3\u6790\u5230\u67E5\u8BE2\u53C2\u6570");
        const w = Math.max(...pairs.map(([k]) => k.length));
        return pairs.map(([k, v]) => `${k.padEnd(w)} = ${v}`).join("\n") + "\n";
      }
    },
    makeUrlJsonTool("url-json", "URL \u53C2\u6570\u4E0E JSON \u4E92\u8F6C", "url", "toJson"),
    {
      id: "url-encode",
      group: "url",
      title: "URL \u7F16\u7801/\u89E3\u7801",
      desc: "component\uFF08\u542B & = ? \u7B49\u5168\u90E8\u4FDD\u7559\u5B57\u7B26\uFF09\u4E0E full\uFF08encodeURI\uFF09\u4E24\u79CD\u65B9\u5F0F",
      sample: "https://example.com/search?q=\u5F00\u53D1\u5DE5\u5177\u7BB1&size=20",
      options: [
        actionOption("encode", [
          { value: "encode", label: "\u7F16\u7801" },
          { value: "decode", label: "\u89E3\u7801" }
        ]),
        {
          key: "method",
          label: "\u65B9\u5F0F",
          type: "segment",
          default: "component",
          options: [
            { value: "component", label: "Component" },
            { value: "uri", label: "Full URI" }
          ]
        }
      ],
      run(input, o) {
        if (!input.trim()) throw new Error("\u8F93\u5165\u4E3A\u7A7A");
        try {
          if (o.action === "encode") return o.method === "component" ? encodeURIComponent(input) : encodeURI(input);
          return o.method === "component" ? decodeURIComponent(input) : decodeURI(input);
        } catch (e) {
          throw new Error(`\u8F6C\u6362\u5931\u8D25\uFF1A${e.message}\uFF08\u53EF\u80FD\u662F\u542B\u6709\u65E0\u6548 % \u5E8F\u5217\uFF09`);
        }
      }
    },
    {
      id: "url-encode-js",
      group: "url",
      title: "URL \u7F16\u7801/\u89E3\u7801(js \u65B9\u5F0F)",
      desc: "\u540C\u65F6\u7ED9\u51FA encodeURIComponent \u4E0E encodeURI \u7ED3\u679C\u5BF9\u7167",
      sample: "https://example.com/search?q=\u5F00\u53D1\u5DE5\u5177\u7BB1&size=20",
      options: [
        actionOption("encode", [
          { value: "encode", label: "\u7F16\u7801\u5BF9\u7167" },
          { value: "decode", label: "\u89E3\u7801" }
        ])
      ],
      run(input, o) {
        if (!input.trim()) throw new Error("\u8F93\u5165\u4E3A\u7A7A");
        if (o.action === "encode") {
          return [
            "// encodeURIComponent\uFF08\u53C2\u6570\u503C\u7528\u8FD9\u4E2A\uFF09",
            encodeURIComponent(input),
            "",
            "// encodeURI\uFF08\u6574\u6761 URL \u7528\u8FD9\u4E2A\uFF09",
            encodeURI(input)
          ].join("\n");
        }
        try {
          return decodeURIComponent(input);
        } catch {
          try {
            return decodeURI(input);
          } catch (e) {
            throw new Error(`\u89E3\u7801\u5931\u8D25\uFF1A${e.message}`);
          }
        }
      }
    },
    {
      id: "url-batch",
      group: "url",
      title: "URL \u6279\u91CF\u751F\u6210\u5668",
      desc: "\u57FA\u7840 URL + \u6BCF\u884C\u4E00\u4E2A path/\u67E5\u8BE2\u7247\u6BB5\uFF0C\u6279\u91CF\u62FC\u63A5",
      sample: "/api/v1/users\n/api/v1/orders?page=1\n/api/v1/sku/1001",
      options: [
        { key: "base", label: "\u57FA\u7840 URL", type: "text", default: "https://api.example.com", placeholder: "https://\u2026" },
        { key: "query", label: "\u8FFD\u52A0\u516C\u5171\u53C2\u6570", type: "text", default: "", placeholder: "token=abc&from=toolbox" }
      ],
      run(input, o) {
        const base = String(o.base || "").trim().replace(/\/+$/, "");
        if (!input.trim()) throw new Error("\u8BF7\u8F93\u5165 path \u5217\u8868\uFF08\u6BCF\u884C\u4E00\u4E2A\uFF09");
        const q = String(o.query || "").trim().replace(/^[?&]+/, "");
        const lines = input.replace(/\r\n/g, "\n").split("\n").map((l) => l.trim()).filter(Boolean);
        const out = lines.map((p) => {
          let url = p.startsWith("http://") || p.startsWith("https://") ? p : base + (p.startsWith("/") ? "" : "/") + p;
          if (q) url += (url.includes("?") ? "&" : "?") + q;
          return url;
        });
        return out.join("\n") + "\n";
      }
    }
  ];
  function getTool(id) {
    return TOOLS.find((t) => t.id === id) || TOOLS[0];
  }


export const LEGACY_TOOLS = TOOLS;
