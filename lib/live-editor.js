"use strict";

var React = require("react");

var CodeMirrorEditor = require("react-live-editor/code-mirror-editor");
var ComponentPreview = require("./live-compile");

var ReactPlayground = React.createClass({
  displayName: "ReactPlayground",

  propTypes: {
    codeText: React.PropTypes.string.isRequired
  },
  keyDown: (event) => {
    let handled = false;
    if(event.keyCode == 27)
    {
      handled = true;
    }
    if(event.keyCode == 34 || event.keyCode == 39)
    {
      handled = true;
    }
    else if(event.keyCode == 33 || event.keyCode == 37)
    {
      handled = true;
    }
    if(handled)
    {
      event.stopPropagation()
      return false;
    }
    return true;

  },
  componentDidMount: function() {
    window.document.querySelector(".playground").addEventListener("keydown", this.keyDown, false);
  },
  componentWillUnmount: function() {
    window.document.querySelector(".playground").removeEventListener("keydown", this.keyDown, false);
  },
  getInitialState: function getInitialState() {
    return {
      code: this.props.codeText
    };
  },

  handleCodeChange: function handleCodeChange(code) {
    this.setState({ code: code });
  },

  render: function render() {
    var code = this.state.code;

    return React.createElement("div", { className: "playground" }, React.createElement("div", { className: "playgroundCode" }, React.createElement(CodeMirrorEditor, {
      onChange: this.handleCodeChange,
      className: "playgroundStage",
      codeText: code
    })), React.createElement("div", { className: "playgroundPreview" }, React.createElement(ComponentPreview, { code: code })));
  }
});

module.exports = ReactPlayground;
