(function () {
  var CMS = window.CMS;
  var createClass = window.createClass; // Decap's Preact createClass
  var h = window.h;

  if (!CMS || !createClass || !h) {
    console.error("Decap CMS globals missing; check script order.");
    return;
  }

  var MonacoMDControl = createClass({
    componentDidMount: function () {
      var container = this.refs.container;
      var value = this.props.value || "";

      // Load Monaco via AMD loader
      window.require(["vs/editor/editor.main"], () => {
        this.editor = monaco.editor.create(container, {
          value: value,
          language: "markdown",
          automaticLayout: true,
          wordWrap: "on",
          minimap: { enabled: false },
          tabSize: 2,
          insertSpaces: true,
        });
        this.editor.onDidChangeModelContent(() => {
          this.props.onChange(this.editor.getValue());
        });
      });
    },

    componentWillUnmount: function () {
      if (this.editor) {
        this.editor.dispose();
      }
    },

    componentWillReceiveProps: function (nextProps) {
      if (this.editor && nextProps.value !== this.props.value) {
        const nextVal = nextProps.value || "";
        if (this.editor.getValue() !== nextVal) {
          this.editor.setValue(nextVal);
        }
      }
    },

    render: function () {
      return h("div", {
        ref: "container",
        style:
          "height:70vh;border:1px solid #e5e7eb;border-radius:8px;background:#fff;",
      });
    },
  });

  var MonacoMDPreview = createClass({
    render: function () {
      return h(
        "pre",
        { style: "white-space: pre-wrap;" },
        this.props.value || ""
      );
    },
  });

  CMS.registerWidget("monaco-md", MonacoMDControl, MonacoMDPreview);
})();
