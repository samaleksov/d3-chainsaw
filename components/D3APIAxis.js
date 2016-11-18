import React from "react"
import { withRouter } from 'react-router'
import * as d3 from "d3"

class D3APIAxis  extends React.Component {
  componentDidMount () {

    const x = d3.scaleLinear().domain([0, 500]).range([0, 500])
    const axis = d3.axisBottom().scale(x)

    const y = d3.scaleLinear().domain([500, 0]).range([0, 500])
    const axisY = d3.axisLeft().scale(y)

    const selection = d3.select(this.refs.mainDiv).append("svg")
    .attr("class", "axis")
    .attr("width", 600)
    .attr("height", 600)

    selection.append("g")
    .attr("transform", "translate(50,550)")
    .call(axis)

    selection.append("g")
    .attr("transform", "translate(50,50)")
    .call(axisY)
  }
  render () {
    return (
      <div ref="mainDiv">
      </div>
    );
  }
}
export default withRouter(D3APIAxis)
