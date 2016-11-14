import React from "react"
import { withRouter } from 'react-router'
import * as d3 from "d3"

class ForceDirectedGraph  extends React.Component {
	svgNode
	svgSelection
	componentDidMount () {
		const svg = d3.select(this.svgNode)

		const width = this.svgNode.clientWidth;
		const height = this.svgNode.clientHeight;

		const color = d3.scaleOrdinal(d3.schemeCategory20)

		const simulation = d3.forceSimulation()
										    .force("link", d3.forceLink().id(function(d) { return d.id }))
										    .force("charge", d3.forceManyBody())

		const group = svg.append("g")
										.attr("width", "100%")
										.attr("height", "100%")

		const zoom = d3.zoom()
	    .scaleExtent([1, Infinity])
	    .on("zoom", zoomed);

		function zoomed() {
		  group.attr("transform",d3.event.transform);
		}

		svg
			.call(zoom)

		zoom.translateBy(svg, width/2, height/2)

		d3.json("miserables.json", function(error, graph) {
			if (error) throw error
			var link = group.append("g")
									  .attr("class", "links")
										.selectAll("line")
										.data(graph.links)
										.enter()
											.append("line")
											.attr("stroke", "#999")
										  .attr("stroke-opacity", 0.6)
									  	.attr("stroke-width", function(d) { return Math.sqrt(d.value) })

			var node = group.append("g")
									  .attr("class", "nodes")
										.selectAll("circle")
										.data(graph.nodes)
										.enter().append("circle")
										  .attr("r", 5)
											.attr("stroke", "#fff")
										  .attr("stroke-width", "1.5px")
										  .attr("fill", function(d) { return color(d.group) })
										  .call(d3.drag()
										      .on("start", dragstarted)
										      .on("drag", dragged)
										      .on("end", dragended))

			node.append("title")
			  .text(function(d) { return d.id; })

			simulation
			  .nodes(graph.nodes)
			  .on("tick", ticked)

			simulation.force("link")
			  .links(graph.links)

			function ticked() {
				link
			    .attr("x1", function(d) { return d.source.x })
			    .attr("y1", function(d) { return d.source.y })
			    .attr("x2", function(d) { return d.target.x })
			    .attr("y2", function(d) { return d.target.y })

				node
			    .attr("cx", function(d) { return d.x })
			    .attr("cy", function(d) { return d.y })
			}

			function dragstarted(d) {
			  if (!d3.event.active) simulation.alphaTarget(0.3).restart()
			  d.fx = d.x
			  d.fy = d.y
			}

			function dragged(d) {
			  d.fx = d3.event.x
			  d.fy = d3.event.y
			}

			function dragended(d) {
			  if (!d3.event.active) simulation.alphaTarget(0)
			  d.fx = null
			  d.fy = null
			}
		})
	}
	render () {
		return (
			<div style={styles.container}>
				<svg style={styles.svg} ref={(node) => this.svgNode = node}>
				</svg>
			</div>
		);
	}
}

export default withRouter(ForceDirectedGraph)

const styles = {
	container: {
		display: "flex",
		flex: 1
	},
	svg: {
		flex: 1
	}
}
