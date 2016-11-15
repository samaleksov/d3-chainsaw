"use strict";

var React = require("react");
var ReactDOM = require("react-dom");
import * as d3 from "d3"
import * as ReactRouter from 'react-router'
import forceZ  from "../lib/d3.forceZ"
import forceSimulation  from "../lib/d3.forceSimulation"
import GamepadControls from "aframe-gamepad-controls"


if(typeof AFRAME != "undefined"){
  var aFrameText = require('aframe-text-component');
  var aFrameBmText = require('aframe-bmfont-text-component');
}

var selfCleaningTimeout = {
  componentDidUpdate: function componentDidUpdate() {
    clearTimeout(this.timeoutID);
  },

  setTimeout: function (_setTimeout) {
    function setTimeout() {
      return _setTimeout.apply(this, arguments);
    }

    setTimeout.toString = function () {
      return _setTimeout.toString();
    };

    return setTimeout;
  }(function () {
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout.apply(null, arguments);
  })
};

var ComponentPreview = React.createClass({
  displayName: "ComponentPreview",

  propTypes: {
    code: React.PropTypes.string.isRequired
  },

  mixins: [selfCleaningTimeout],

  render: function render() {
    return React.createElement("div", { ref: "mount" });
  },

  componentDidMount: function componentDidMount() {
    this.executeCode();
  },

  componentDidUpdate: function componentDidUpdate(prevProps) {
    // execute code only when the state's not being updated by switching tab
    // this avoids re-displaying the error, which comes after a certain delay
    if (this.props.code !== prevProps.code) {
      this.executeCode();
    }
  },

  compileCode: function compileCode() {
    return Babel.transform(this.props.code, {
      presets: ['es2015', 'react', 'stage-0']
    }).code;
  },

  executeCode: function executeCode() {
    var mountNode = this.refs.mount;

    try {
      ReactDOM.unmountComponentAtNode(mountNode);
    } catch (e) {}

    try {
      var compiledCode = this.compileCode();
      var require = function(module){
        if(module == "react")
        return React;
        else if(module == "react-router")
        return ReactRouter;
        else if(module == "d3")
        return d3;
        else if(module == "../lib/d3.forceZ")
        return forceZ;
        else if(module == "../lib/d3.forceSimulation")
        return forceSimulation;
        else if(module == "aframe-gamepad-controls")
        return GamepadControls;
        else if(module == "aframe-text-component")
        return aFrameText;
        else if(module == "aframe-bmfont-text-component")
        return aFrameBmText;

        throw `Live code dependency ${module} must be declared in live-compile.js`;
      };

      ReactDOM.render(React.createElement(eval(compiledCode), { style: { display: "flex", flex: 1} }), mountNode);
    } catch (err) {
      this.setTimeout(function () {
        ReactDOM.render(React.createElement("div", { className: "playgroundError" }, err.toString()), mountNode);
      }, 500);
    }
  }
});

module.exports = ComponentPreview;
