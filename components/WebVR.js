import React from "react"
import { withRouter } from 'react-router'
import * as d3 from "d3"
import forceZ  from "../lib/d3.forceZ"
import forceSimulation  from "../lib/d3.forceSimulation"
import GamepadControls from "aframe-gamepad-controls";

if(typeof AFRAME != "undefined"){
  var coordinates = AFRAME.utils.coordinates;

  if(!('gamepad-controls' in AFRAME.components))
  AFRAME.registerComponent('gamepad-controls', GamepadControls);

  if(!('text' in AFRAME.components))
  require('aframe-text-component');

  if(!('bmfont-text' in AFRAME.components))
  require('aframe-bmfont-text-component');

  if(!('line' in AFRAME.components))
  AFRAME.registerComponent('line', {
    schema: {
      color: { default: '#333' },

      path: {
        default: [
          { x: -0.5, y: 0, z: 0 },
          { x: 0.5, y: 0, z: 0 }
        ],
        parse: function (value) {
          if( Object.prototype.toString.call(value) === '[object Array]' ) {
            return value
          }
          return value.split(',').map(coordinates.parse);
        },
        stringify: function (data) {
          return data.map(coordinates.stringify).join(',');
        }
      }
    },
    update: function (oldData) {
      var material = new THREE.LineBasicMaterial({
        color: this.data.color,
        linewidth: 5
      });
      var geometry = new THREE.Geometry();
      this.data.path.forEach(function (vec3) {
        geometry.vertices.push(
          new THREE.Vector3(vec3.x, vec3.y, vec3.z)
        );
      });

      this.el.setObject3D('mesh', new THREE.Line(geometry, material));
    },
    remove: function () {
      this.el.removeObject3D('mesh');
    }
  });
}

class WebVR  extends React.Component {

  componentDidMount () {

    // Screens
    const data = [ 1, 2 ]

    const nodes = [
      { id: 1, value: 1, name: "Microsoft", description: "NASDAQ: MSFT" },
      { id: 2, value: 2, name: "Amazon", description: "NASDAQ: AMZN" },
      { id: 3, value: 3, name: "Samsung", description: "LON: BC94" },
      { id: 4, value: 4, name: "Apple", description: "NASDAQ: AAPL" },
      { id: 5, value: 5, name: "HTC", description: "TPE: 2498" },
      { id: 6, value: 6, name: "Nokia", description: "NYSE: NOK" },
      { id: 7, value: 7, name: "Kodak", description: "OTCMKTS: EKDKQ" },
      { id: 8, value: 8, name: "Barnes & Noble", description: "NYSE: BKS" },
      { id: 9, value: 9, name: "Foxconn", description: "TPE: 2354" },
      { id: 10, value: 10, name: "Google", description: "NASDAQ: GOOGL" },
      { id: 11, value: 11, name: "Inventec", description: "TPE: 2356" },
      { id: 12, value: 12, name: "LG", description: "KRX: 003555" },
      { id: 13, value: 13, name: "Motorola", description: "NYSE: MSI" },
      { id: 14, value: 14, name: "ZTE", description: "SHE: 000063" },
      { id: 15, value: 15, name: "RIM", description: "NASDAQ: BBRY" },
      { id: 16, value: 16, name: "Qualcomm", description: "NASDAQ: QCOM" },
      { id: 17, value: 17, name: "Oracle", description: "NYSE: ORCL" },
      { id: 18, value: 18, name: "Sony", description: "NYSE: SNE" },
      { id: 19, value: 19, name: "Ericsson", description: "NASDAQ: ERIC" },
      { id: 20, value: 20, name: "Huawei", description: "Private" },
    ]

    const links = [
      { id: 1, source: 1, target: 2, type: "licensing", color: "blue"},
      { id: 2, source: 1, target: 5, type: "licensing", color: "blue"},
      { id: 3, source: 3, target: 4, type: "suit", color: "red"},
      { id: 4, source: 1, target: 4, type: "suit", color: "red"},
      { id: 5, source: 6, target: 4, type: "resolved", color: "green"},
      { id: 6, source: 5, target: 4, type: "suit", color: "red"},
      { id: 7, source: 7, target: 4, type: "suit", color: "red"},
      { id: 8, source: 1, target: 8, type: "suit", color: "red"},
      { id: 9, source: 1, target: 9, type: "suit", color: "red"},
      { id: 10, source: 17, target: 10, type: "suit", color: "red"},
      { id: 11, source: 4, target: 5, type: "suit", color: "red"},
      { id: 12, source: 1, target: 11, type: "suit", color: "red"},
      { id: 13, source: 3, target: 7, type: "resolved", color: "green"},
      { id: 14, source: 12, target: 7, type: "resolved", color: "green"},
      { id: 15, source: 15, target: 7, type: "suit", color: "red"},
      { id: 16, source: 18, target: 12, type: "suit", color: "red"},
      { id: 17, source: 7, target: 12, type: "resolved", color: "green"},
      { id: 18, source: 4, target: 6, type: "resolved", color: "green"},
      { id: 19, source: 16, target: 6, type: "resolved", color: "green"},
      { id: 20, source: 4, target: 13, type: "suit", color: "red"},
      { id: 21, source: 1, target: 13, type: "suit", color: "red"},
      { id: 22, source: 13, target: 1, type: "suit", color: "red"},
      { id: 23, source: 20, target: 14, type: "suit", color: "red"},
      { id: 24, source: 19, target: 14, type: "suit", color: "red"},
      { id: 25, source: 7, target: 3, type: "resolved", color: "green"},
      { id: 26, source: 4, target: 3, type: "suit", color: "red"},
      { id: 27, source: 7, target: 15, type: "suit", color: "red"},
      { id: 28, source: 6, target: 16, type: "suit", color: "red"}
    ];



    const hscale = d3.scaleLinear()
    .domain([0, d3.max(data)])
    .range([0, 100])

    const scene = d3.select("a-scene")

    const bars = scene.selectAll("a-box.bar")
    .data(data)

    this.node = scene.select(".graph")
    .selectAll("a-entity.node")
    .data(nodes)

    this.link = scene.select(".graph")
    .selectAll("a-entity.link")
    .data(links)

    const nodeEnter = this.node.enter()

    const spheres =   nodeEnter
    .append("a-entity")
    .attr("geometry", "primitive: sphere")
    .attr("radius", 2.5)
    .classed("node", true)

    spheres.append("a-entity")
    .attr("mixin", "lookAtCamera")
    .attr("position", "0 0 4")
    .attr("scale", "4 4 4")
    .attr("text", (d, i) => `text: ${d.name}` )

    spheres
    .attr('opacity', 0.5)
    .on("click", function(d) {
      newBars.selectAll("a-entity")
        .attr("text", (monitor) => `size: 8; text: ${ (monitor==2 ? d.name : d.description) }`)
    })
    .on("mouseenter", function() {
      if(this.hovering) return;
      this.hovering = true;
      d3.select(this).transition().duration(1000)
      .attr("scale", 2)
    })
    .on("mouseleave", function() {
      this.hovering = false;
      d3.select(this).transition()
      .attr("scale", 1)
    })

    const lines = this.link.enter()
    .append("a-entity")
    .classed("link", true)
    .attr("line", (d) => `color: ${d.color};`)

    const simulation = forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id }))
    .force("center", d3.forceCenter())
    .force("x", d3.forceX())
    .force("y", d3.forceY())
    .force("charge", d3.forceManyBody())

    simulation
    .nodes(nodes)
    .on("tick", () => {
      spheres
      .attr("position", function(d) {
        return d.x + " " + d.y + " " + d.z
      })

      lines
      .attr("line", function(d) {
        return `color: ${d.color}; path: ${d.source.x} ${d.source.y} ${d.source.z}, ${d.target.x} ${d.target.y} ${d.target.z}`
      })
    })

    simulation.force("link")
    .links(links);

    const newBars = bars.enter()
    .append("a-box")
    .classed("bar", true)

    newBars.attr('position', function (d,i) {
      const y = 1 + hscale(d3.max(data))/2
      const radius = 160;
      const x = radius * Math.cos(i/data.length * 2 * Math.PI)
      const z = radius * Math.sin(i/data.length * 2 * Math.PI)
      return x + " " + (y - 30) + " " + z
    })
    .attr('rotation', (d,i) => {
      const x = 0
      const z = 0
      const y = -(i/data.length)*360
      return x + " " + y + " " + z
    })
    .attr('width', 0.5)
    .attr('depth', 160)
    .attr('height', (d) => hscale(d3.max(data)))
    .attr('opacity', (d,i) => 0.6 + (i/data.length) * 0.4)
    .on("click", function(d,i) {
      console.log("click", i,d)
    })
    .on("mouseenter", function(d,i) {
      if(this.hovering) return;
      console.log("hover", i,d)
      this.hovering = true;
      d3.select(this).transition().duration(1000)
      .attr("metalness", 0.5)
      .attr("width", 2)
    })
    .on("mouseleave", function(d,i) {
      console.log("leave",i,d)
      this.hovering = false;
      d3.select(this).transition()
      .attr("metalness", 0)
      .attr("width", 0.5)
    })
    .append("a-entity")
      .attr("text", (d, i) => `size: 8; text: Screen ${i}`)
      .attr('position', function (d,i) {
        const y = 0
        const x = -6
        const z = -20
        return x + " " + y + " " + z
      })
      .attr('rotation', (d,i) => {
        const x = 0
        const z = 0
        const y = -((i==0 ? i + 1 : i)/data.length)*180
        return x + " " + y + " " + z
      })
  }
  render () {
    return (
      <div style={ styles.container }>
        <a-scene>
          <a-assets>
            <a-mixin id="lookAtCamera" look-at="#camera"></a-mixin>
          </a-assets>
          <a-entity class="graphContainer" >


            <a-entity class="graph" >
              <a-entity mixin="lookAtCamera" position="-260 0 -560" text="size: 45;text: Mobile Patent Suits" />
            </a-entity>

          </a-entity>
          <a-sky src="/room_reception.jpg" />
          <a-entity id="camera" camera="userHeight: 1.6" position="0 0 60" gamepad-controls="flyEnabled: true" look-controls wasd-controls="fly: true; acceleration: 820">
            <a-entity position="0 0 -1"
              geometry="primitive: ring; radiusOuter: 0.03;
              radiusInner: 0.02;"
              material="color: cyan; shader: flat"
              cursor="maxDistance: 30; fuse: true">
              <a-animation begin="click" easing="ease-in" attribute="scale"
                fill="backwards" from="0.1 0.1 0.1" to="1 1 1" dur="150"></a-animation>
              <a-animation begin="cursor-fusing" easing="ease-in" attribute="scale"
                fill="backwards" from="1 1 1" to="0.1 0.1 0.1" dur="1500"></a-animation>
            </a-entity>
          </a-entity>
        </a-scene>
      </div>
    );
  }
}
export default withRouter(WebVR)

const styles = {
  container: {
    backgroundColor: "black",
    display: "flex",
    flex: 1
  }
}
