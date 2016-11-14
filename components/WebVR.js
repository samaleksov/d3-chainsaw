import React from "react"
import { withRouter } from 'react-router'
import * as d3 from "d3"
import forceZ  from "../lib/d3.forceZ"
import forceSimulation  from "../lib/d3.forceSimulation"
import GamepadControls from "aframe-gamepad-controls";

if(typeof AFRAME != "undefined"){
  var coordinates = AFRAME.utils.coordinates;

  AFRAME.registerComponent('gamepad-controls', GamepadControls);
  require('aframe-text-component');
  require('aframe-bmfont-text-component');
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
  	    color: this.data.color
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



function * nodeGenerator (amount, valueMin, valueMax) {
  let id = 0;
  const randomGen = d3.randomUniform(valueMin, valueMax)
    while(id < amount)
      yield { id: id++, value: Math.trunc(randomGen()) }
}

function * linkGenerator (amount, nodes) {
  let id = 0;
  const randomGen = d3.randomUniform(0, nodes)
    while(id < amount)
      yield { id: id++, source: Math.trunc(randomGen()), target: Math.trunc(randomGen()) }
}

class WebVR  extends React.Component {

	componentDidMount () {
		const data = [ 100, 120, 130, 200 ]

		const nodes = [	]
    for(let node of nodeGenerator(10, 1, 200)){
        nodes.push(node)
    }

		const links = [	]
    for(let link of linkGenerator(10, nodes.length)){
        links.push(link)
    }

		const hscale = d3.scaleLinear()
							    	.domain([0, d3.max(data)])
							    	.range([0, 3])

		const scene = d3.select("a-scene")

		const bars = scene.selectAll("a-box.bar")
											.data(data)

		const nodeSelector = scene.select(".graph")
											.selectAll("a-entity.node")
											.data(nodes)

		const linkSelector = scene.select(".graph")
															.selectAll("a-entity.link")
															.data(links)

    scene.select(".graphContainer")
      .attr('opacity', 0.5)
      .on("click", function() {
        console.log("click")
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


    const nodeEnter = nodeSelector.enter()

		const spheres =   nodeEnter
												.append("a-entity")
                          .attr("geometry", "primitive: sphere")
                          .attr("radius", 2.5)
													.classed("node", true)

    spheres.append("a-entity")
          .attr("mixin", "lookAtCamera")
          .attr("position", "0 0 4")
          .attr("scale", "4 4 4")
          .attr("text", (d, i) => `text: ${d.id}` )

    spheres
      .attr('opacity', 0.5)
      .on("click", function() {
        console.log("click")
      })
      .on("mouseenter", function() {
        if(this.hovering) return;
        this.hovering = true;
        d3.select(this).transition().duration(1000)
        .attr("radius", 5)
      })
      .on("mouseleave", function() {
        this.hovering = false;
        d3.select(this).transition()
        .attr("radius", 2.5)
      })

		const lines = linkSelector.enter()
																.append("a-entity")
																	.classed("link", true)
																	.attr("line", "color: #E20049;")

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
						return `color: #E20049; path: ${d.source.x} ${d.source.y} ${d.source.z}, ${d.target.x} ${d.target.y} ${d.target.z}`
					})
			})

		simulation.force("link")
      .links(links);

    const newBars = bars.enter()
												.append("a-box")
													.classed("bar", true)

		newBars.attr('position', function (d,i) {
		      const y = 1 + hscale(d)/2
		      const radius = 5;
		      const x = radius * Math.cos(i/data.length * 2 * Math.PI)
		      const z = radius * Math.sin(i/data.length * 2 * Math.PI)
		      return x + " " + y + " " + z
		    })
				.attr('rotation', (d,i) => {
					const x = 0
					const z = 0
					const y = -(i/data.length)*360
					return x + " " + y + " " + z
		    })
				.attr('width', 0.5)
				.attr('depth', 5)
				.attr('height', (d) => hscale(d))
				.attr('opacity', (d,i) => 0.6 + (i/data.length) * 0.4)
		    .on("click", function(d,i) {
		      console.log("click", i,d)
		    })
			  .on("mouseenter", function(d,i) {
			    // this event gets fired continuously as long as the cursor
			    // is over the element. we only want trigger our animation the first time
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
              <a-entity mixin="lookAtCamera" text="text: Hello World" />
            </a-entity>

          </a-entity>
          <a-sky src="room_reception.jpg" />
					<a-entity id="camera" camera="userHeight: 1.6" position="0 0 0" gamepad-controls="flyEnabled: true" look-controls wasd-controls="fly: true">
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
