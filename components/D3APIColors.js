import React from "react"
import { withRouter } from 'react-router'
import * as d3 from "d3"

class D3APIColors  extends React.Component {
  componentDidMount () {

    var white = d3.rgb("white"),
    black = d3.rgb("black"),
    width = d3.select("canvas").property("width");

    var channels = {
      h: {scale: d3.scaleLinear().domain([0, 360]).range([0, width]), x: width / 2},
      s: {scale: d3.scaleLinear().domain([0, 2]).range([0, width]), x: width / 2},
      l: {scale: d3.scaleLinear().domain([0, 1]).range([0, width]), x: width / 2}
    };

    var channel = d3.selectAll(".channel")
    .data(d3.entries(channels));

    function convert(d) {
      var current = d3.cubehelix(
        channels.h.scale.invert(channels.h.x),
        channels.s.scale.invert(channels.s.x),
        channels.l.scale.invert(channels.l.x)
      );
      const rgb = current.rgb();
      const hsl = d3.hsl(current.rgb())
      const lab = d3.lab(current.rgb())
      const hcl = d3.hcl(current.rgb())
      d3.select("#titleColors").style("color", rgb)
      d3.select("#rgbValues").text(rgb)
      d3.select("#hslValues").text(`H: ${hsl.h} S: ${hsl.s} L: ${hsl.l}`)
      d3.select("#labValues").text(`L: ${lab.l} A: ${lab.a} B: ${lab.b}`)
      d3.select("#hclValues").text(`H: ${hcl.h} C: ${hcl.c} L: ${hcl.l}`)
      d3.select("#cubehelixValues").text(`H: ${current.h} S: ${current.s} L: ${current.l}`)
      d3.select("#brighterValue")
      d3.select("#darkerValue")
    }
    var canvas = channel.select("canvas")
    .call(d3.drag().on("drag", dragged))
    .each(render);

    function dragged(d) {
      d.value.x = Math.max(0, Math.min(this.width - 1, d3.mouse(this)[0]));

      canvas.each(render);
      convert(d)
    }

    function render(d) {
      var width = this.width,
      context = this.getContext("2d"),
      image = context.createImageData(width, 1),
      i = -1;

      var current = d3.cubehelix(
        channels.h.scale.invert(channels.h.x),
        channels.s.scale.invert(channels.s.x),
        channels.l.scale.invert(channels.l.x)
      );

      for (var x = 0, v, c; x < width; ++x) {
        current[d.key] = d.value.scale.invert(x);
        c = current.rgb();
        image.data[++i] = c.r;
        image.data[++i] = c.g;
        image.data[++i] = c.b;
        image.data[++i] = 255;
      }

      context.putImageData(image, 0, 0);

    }

  }
  render () {
    return (
      <div>
      <div style={{ flexDirection: "column"}}>
      <div className="channel" id="h">
      <canvas width="400" height="1"></canvas>
      </div>
      <div className="channel" id="s">
      <canvas width="400" height="1"></canvas>
      </div>
      <div className="channel" id="l">
      <canvas width="400" height="1"></canvas>
      </div>
      </div>
      <div id="colors" style={{ flexDirection: "column"}}>
      <h1 id="titleColors">Color spaces</h1>

      <div>
      <span id="brighterValue"> Brighter </span>
      </div>
      <div>
      <span id="darkerValue"> Darker </span>
      </div>

      <div>
      <span> RGB </span> <p id="rgbValues"></p>
      </div>
      <div>
      <span> LAB </span> <p id="labValues"></p>
      </div>
      <div>
      <span> HSL </span> <p id="hslValues"></p>
      </div>
      <div>
      <span> HCL </span> <p id="hclValues"></p>
      </div>
      <div>
      <span> CHX </span> <p id="cubehelixValues"></p>
      </div>
      </div>
      </div>
    );
  }
}
export default withRouter(D3APIColors)
