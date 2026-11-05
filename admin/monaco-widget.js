(function () {
  var CMS = window.CMS;

  if (!CMS) {
    console.error("Decap CMS global missing; checking script order.");
    return;
  }

  // Modern Decap CMS exposes its React engine here
  var React = window.React || CMS.React;
  if (!React) {
    console.error("React engine could not be extracted from CMS.");
    return;
  }

  // Define the editor control block using clean modern class syntax
  class MonacoMDControl extends React.Component {
    constructor(props) {
      super(props);
      this.containerRef = React.createRef();
      this.editor = null;
    }

    componentDidMount() {
      var container = this.containerRef.current;
      var value = this.props.value || "";

      // Load Monaco via AMD loader safely
      if (window.require) {
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
      }
    }

    componentWillUnmount() {
      if (this.editor) {
        this.editor.dispose();
      }
    }

    componentDidUpdate(prevProps) {
      if (this.editor && this.props.value !== prevProps.value) {
        var nextVal = this.props.value || "";
        if (this.editor.getValue() !== nextVal) {
          this.editor.setValue(nextVal);
        }
      }
    }

    render() {
      return React.createElement("div", {
        ref: this.containerRef,
        style: {
          height: "70vh",
          border: "1px solid #e5e7eb",
          borderRadius: "8px",
          background: "#fff"
        }
      });
    }
  }

  // Define the side-by-side preview block
  class MonacoMDPreview extends React.Component {
    render() {
      return React.createElement(
        "pre",
        { style: { whiteSpace: "pre-wrap" } },
        this.props.value || ""
      );
    }
  }

  // Register the finished components with Decap
  CMS.registerWidget("monaco-md", MonacoMDControl, MonacoMDPreview);
})();