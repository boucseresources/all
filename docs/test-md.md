---
title: "test "
---
You’re hitting **React error #284** because our widget used an old **string ref** (`ref: "container"`). In React 18 (used by Decap), refs must be a **callback** or **createRef**—string refs crash. ([react.dev](https://react.dev/errors/284?utm_source=chatgpt.com "Minified React error #284"))

Here’s a *fixed*, built-in (no iframe) Monaco widget that works with Decap’s inline API (`createClass`, `h`). Drop these in exactly:

# 1) `docs/admin/monaco-widget.js` (fixed refs + safer updates) 

```js
(function () {
  var CMS = window.CMS, createClass = window.createClass, h = window.h;
  if (!CMS || !createClass || !h) { console.error("Decap globals missing"); return; }

  var MonacoMDControl = createClass({
    componentDidMount: function () {
      var initial = this.props.value || "";

      var mount = () => {
        if (!this.container) return;
        this.editor = monaco.editor.create(this.container, {
          value: initial,
          language: "markdown",
          automaticLayout: true,
          wordWrap: "on",
          minimap: { enabled: false },
          tabSize: 2,
          insertSpaces: true
        });
        this._sub = this.editor.onDidChangeModelContent(() => {
          this.props.onChange(this.editor.getValue());
        });
      };

      if (window.require && window.require.config) {
        window.require(["vs/editor/editor.main"], mount);
      } else if (window.monaco) {
        mount();
      }
    },

    componentDidUpdate: function (prevProps) {
      if (this.editor && this.props.value !== prevProps.value) {
        const next = this.props.value || "";
        if (this.editor.getValue() !== next) this.editor.setValue(next);
      }
    },

    componentWillUnmount: function () {
      if (this._sub && this._sub.dispose) this._sub.dispose();
      if (this.editor) this.editor.dispose();
    },

    render: function () {
      return h("div", {
        ref: (el) => { this.container = el; },   // ✅ callback ref (no string refs)
        style: "height:72vh;border:1px solid #e5e7eb;border-radius:8px;background:#fff;"
      });
    }
  });

  var MonacoMDPreview = createClass({
    render: function () {
      return h("pre", { style: "white-space:pre-wrap" }, this.props.value || "");
    }
  });

  CMS.registerWidget("monaco-md", MonacoMDControl, MonacoMDPreview);
})();
```

# 2) `docs/admin/index.html` (load order matters)

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="robots" content="noindex" />
    <title>Content Manager</title>
  </head>
  <body>
    <!-- Decap first -->
    <script src="https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js"></script>

    <!-- Monaco AMD loader + path -->
    <script src="https://unpkg.com/monaco-editor@0.45.0/min/vs/loader.js"></script>
    <script>
      window.require.config({ paths: { vs: "https://unpkg.com/monaco-editor@0.45.0/min/vs" } });
      // optional worker bootstrap (helps on some hosts)
      window.MonacoEnvironment = {
        getWorkerUrl: function () {
          const code = `
            self.MonacoEnvironment = { baseUrl: 'https://unpkg.com/monaco-editor@0.45.0/min/' };
            importScripts('https://unpkg.com/monaco-editor@0.45.0/min/vs/base/worker/workerMain.js');`;
          return URL.createObjectURL(new Blob([code], { type: "text/javascript" }));
        },
      };
    </script>

    <!-- Register the widget (after Decap + loader) -->
    <script src="./monaco-widget.js"></script>
  </body>
</html>
```

# 3) `config.yml` (use the widget)

```yaml
collections:
  - name: pages
    label: All Pages
    folder: "docs"
    create: true
    extension: "md"
    path: "{{dirname}}/{{slug}}.md"
    fields:
      - { label: "Title", name: "title", widget: "string" }
      - label: "Body"
        name: "body"
        widget: "monaco-md"
```

Why this works:

* We use Decap’s **inline widget API** (`createClass`, `h`) as documented, so no extra build step. ([Decap CMS](https://decapcms.org/docs/custom-widgets/?utm_source=chatgpt.com "Creating Custom Widgets"))
* We replaced **string refs** with a **callback ref** to satisfy React 18 (fixes error #284). ([react.dev](https://react.dev/errors/284?utm_source=chatgpt.com "Minified React error #284"))

If it still errors, open the browser console and confirm:

* `decap-cms.js`, `loader.js`, and `monaco-widget.js` load (HTTP 200).
* No “Unknown widget: monaco-md”.
* No React 284 (string-ref) error.

Want me to also add quick **bold/italic/link/image** actions into Monaco (VS Code-style commands that insert Markdown)?
