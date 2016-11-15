import React from "react"
import { withRouter } from 'react-router'
import * as d3 from "d3"

const color = d3.scaleOrdinal(d3.schemeCategory20)

class D3Force1  extends React.Component {
	dragstarted = (d) => {
		if (!d3.event.active) this.simulation.alphaTarget(0.3).restart()
		d.fx = d.x
		d.fy = d.y
	}

	dragged(d) {
		d.fx = d3.event.x
		d.fy = d3.event.y
	}

	dragended = (d) => {
		if (!d3.event.active) simulation.alphaTarget(0)
		d.fx = null
		d.fy = null
	}
	links = []
	nodes = [{}]
	addOne = (coordinates) => {
		this.nodes.push({x: coordinates[0], y: coordinates[1]})
		this.node = this.group.select("g.nodes").selectAll("circle")
				.data(this.nodes)

		this.nodeEnter = this.node.enter().append("circle")
					.attr("r", 5)
					.attr("stroke", "#fff")
					.attr("stroke-width", "1.5px")
					.attr("fill", function(d) { return color(d.group) })

					.call(d3.drag()
							.on("start", this.dragstarted)
							.on("drag", this.dragged)
							.on("end", this.dragended))

		this.node = this.node.merge(this.nodeEnter)

		this.simulation
			.nodes(this.nodes)

		this.simulation.alphaTarget(0.3).restart();
	}
	componentWillUnmount () {
	  d3.select(this.svgNode).on("mousedown", null)
	}
	componentDidMount () {
		const svg = d3.select(this.svgNode)

		const width = this.svgNode.clientWidth;
		const height = this.svgNode.clientHeight;

		this.simulation = d3.forceSimulation()
										    .force("link", d3.forceLink().id(function(d) { return d.id }))
										    .force("charge", d3.forceManyBody())

		this.group = svg.append("g")
										.attr("width", "100%")
										.attr("height", "100%")

		this.group.attr("transform",`translate(${width/2}, ${height/2})`);

		this.link = this.group.append("g")
								  .attr("class", "links")
									.selectAll("line")
									.data(this.links)
									.enter()
										.append("line")
										.attr("stroke", "#999")
									  .attr("stroke-opacity", 0.6)
								  	.attr("stroke-width", function(d) { return Math.sqrt(d.value) })

		this.node = this.group.append("g")
								  .attr("class", "nodes")
									.selectAll("circle")
									.data(this.nodes)

		this.nodeEnter = this.node.enter().append("circle")
									  .attr("r", 5)
										.attr("stroke", "#fff")
									  .attr("stroke-width", "1.5px")
									  .attr("fill", function(d) { return color(d.group) })
									  .call(d3.drag()
									      .on("start", this.dragstarted)
									      .on("drag", this.dragged)
									      .on("end", this.dragended))

			this.node.append("title")
			  .text(function(d) { return d.id; })

			let ticked = () => {
				this.link
			    .attr("x1", function(d) { return d.source.x })
			    .attr("y1", function(d) { return d.source.y })
			    .attr("x2", function(d) { return d.target.x })
			    .attr("y2", function(d) { return d.target.y })

				this.node
			    .attr("cx", function(d) { return d.x })
			    .attr("cy", function(d) { return d.y })
			}

			this.simulation
			  .nodes(this.nodes)
			  .on("tick", ticked)

			this.simulation.force("link")
			  .links(this.links)

			const that = this;
			d3.select(this.svgNode).on("mousedown", function() {
			  var div = d3.select(this)
			      .classed("active", true);

			  var w = d3.select(window)
			      .on("mousemove", mousemove)
			      .on("mouseup", mouseup);

			  d3.event.preventDefault(); // disable text dragging

			  function mousemove() {
			     that.addOne(d3.mouse(that.group.node()));
			  }

			  function mouseup() {
			    w.on("mousemove", null).on("mouseup", null);
			  }
			});
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

export default withRouter(D3Force1)

const styles = {
	container: {
		display: "flex",
		flex: 1
	},
	svg: {
		flex: 1
	}
}
