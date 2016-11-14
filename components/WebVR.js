import React from "react"
import { withRouter } from 'react-router'
import * as d3 from "d3"
import forceZ  from "../lib/d3.forceZ"

if(typeof AFRAME != "undefined"){
  var coordinates = AFRAME.utils.coordinates;

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


class WebVR  extends React.Component {

	componentDidMount () {
		const data = [	10, 20, 30, 15, 25, 35, 40,
	          			45, 50, 70, 100, 120, 130,
	             		12, 18, 22, 29, 33, 44, 59, 200]

		const nodes = [	{id: 1, value: 100},
										{id: 2, value: 200 },
										{id: 3, value: 50 },
										{id: 4, value: 150 },
										{id: 5, value: 20 },
										{id: 6, value: 80 },
                    {id: 7, value: 100},
										{id: 8, value: 200 },
										{id: 9, value: 50 },
										{id: 10, value: 150 },
										{id: 11, value: 20 },
										{id: 12, value: 80 },
                    {id: 13, value: 100},
										{id: 14, value: 200 },
										{id: 15, value: 50 },
										{id: 16, value: 150 },
										{id: 17, value: 20 },
										{id: 18, value: 80 }]

		const links = [	{id: 1, source: 1, target: 2 },
		 								{id: 2, source: 1, target: 3 },
										{id: 3, source: 1, target: 4 },
										{id: 4, source: 1, target: 5 },
										{id: 5, source: 1, target: 6 },
										{id: 6, source: 2, target: 3 },
										{id: 7, source: 2, target: 4 },
										{id: 8, source: 2, target: 5 },
										{id: 9, source: 2, target: 6 },
                    {id: 10, source: 1, target: 7 },
		 								{id: 11, source: 1, target: 8 },
										{id: 12, source: 1, target: 9 },
										{id: 13, source: 1, target: 10 },
										{id: 14, source: 1, target: 11 },
                    {id: 15, source: 1, target: 12 },
		 								{id: 16, source: 1, target: 13 },
										{id: 17, source: 1, target: 14 },
										{id: 18, source: 1, target: 15 },
										{id: 19, source: 1, target: 16 },
                    {id: 20, source: 1, target: 17 },
                    {id: 21, source: 1, target: 18 }]

		const hscale = d3.scaleLinear()
							    	.domain([0, d3.max(data)])
							    	.range([0, 3])

		const scene = d3.select("a-scene")

		const bars = scene.selectAll("a-box.bar")
											.data(data)

		const nodeSelector = scene.select(".graph")
											.selectAll("a-sphere.node")
											.data(nodes)

		const linkSelector = scene.select(".graph")
															.selectAll("a-entity.link")
															.data(links)

		const spheres = nodeSelector.enter()
												.append("a-sphere")
													.classed("node", true)

		const lines = linkSelector.enter()
																.append("a-entity")
																	.classed("link", true)
																	.attr("line", "color: #E20049;")

		const simulation = d3.forceSimulation()
										    .force("link", d3.forceLink().id(function(d) { return d.id }))
                        .force("z", forceZ())
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
				.attr('depth', 0.9)
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
					<a-entity class="graph" position="0 2 -2" scale="0.02 0.02 0.02"></a-entity>
					<a-entity camera="userHeight: 1.6" position="0 0 0" look-controls wasd-controls>
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
