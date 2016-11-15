import React from "react"
import { withRouter } from 'react-router'
import * as d3 from "d3"

class BasicShapes  extends React.Component {
  svgNode
  svgSelection
  componentDidMount () {
    this.svgSelection = d3.select(this.svgNode)

    this.svgSelection.append("line")
    .attr("x1", 25)
    .attr("y1", 25)
    .attr("x2", 65)
    .attr("y2", 65)
    .attr("stroke-width", 3)
    .attr("stroke", "black")

    const arc = d3.arc()
    .innerRadius(0)
    .outerRadius(40)
    .startAngle(0)
    .endAngle(Math.PI / 2)
    
    this.svgSelection.append("path")
    .attr("transform", "translate(25 165)")
    .attr("d", arc())
    .attr("stroke", "black")

    this.svgSelection.append("path")
    .attr("d", d3.symbol()
    .type(d3.symbolDiamond)
    .size(1000))
    .attr("transform", "translate(400 40)")
    .attr("fill", "green")

    this.svgSelection.append("path")
    .attr("d", d3.symbol()
    .type(d3.symbolTriangle)
    .size(1000))
    .attr("transform", "translate(280 40)")
    .attr("fill", "blue")

    this.svgSelection.append("path")
    .attr("d", d3.symbol()
    .type(d3.symbolCircle)
    .size(1000))
    .attr("transform", "translate(160 40)")
    .attr("fill", "purple")

    this.svgSelection.append("path")
    .attr("d", d3.symbol()
    .type(d3.symbolCross)
    .size(1000))
    .attr("transform", "translate(480 40)")
    .attr("fill", "yellow")

    this.svgSelection.append("path")
    .attr("d", d3.symbol()
    .type(d3.symbolSquare)
    .size(1000))
    .attr("transform", "translate(580 40)")
    .attr("fill", "brown")

    this.svgSelection.append("path")
    .attr("d", d3.symbol()
    .type(d3.symbolStar)
    .size(1000))
    .attr("transform", "translate(680 40)")
    .attr("fill", "red")

    this.svgSelection.append("path")
    .attr("d", d3.symbol()
    .type(d3.symbolWye)
    .size(1000))
    .attr("transform", "translate(780 40)")
    .attr("fill", "orange")
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
export default withRouter(BasicShapes)

const styles = {
  container: {
    display: "flex",
    flex: 1
  },
  svg: {
    flex: 1
  }
}
