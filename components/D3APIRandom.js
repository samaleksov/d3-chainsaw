import React from "react"
import { withRouter } from 'react-router'
import * as d3 from "d3"

class D3APIRandom  extends React.Component {
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


    function * randomUniform (items) {
      const randomGen = d3.randomUniform(0, 501)
      while(items--)
      {
        yield Math.floor(randomGen())
      }
    }

    const uniformData = Array.from(randomUniform(50))

    selection.append("g")
    .attr("transform", "translate(50,50)")
    .selectAll("circle")
    .data(uniformData)
    .enter()
    .append("circle")
    .attr("r", 5)
    .attr("fill", "red")
    .attr("cx", (d) => x(d))
    .attr("cy", (d) => y(d))

    function * randomNormal (items) {
      const randomGen = d3.randomNormal(250, 30)
      while(items--)
      {
        yield Math.floor(randomGen())
      }
    }
    const normalData = Array.from(randomNormal(50))

    selection.append("g")
    .attr("transform", "translate(50,50)")
    .selectAll("circle")
    .data(normalData)
    .enter()
    .append("circle")
    .attr("r", 3)
    .attr("fill", "orange")
    .attr("cx", (d) => x(d))
    .attr("cy", (d) => y(d))

    function * randomLogNormal (items) {
      const randomGen = d3.randomLogNormal(0, 2)
      while(items--)
      {
        yield Math.floor(randomGen())
      }
    }

    const logNormalData = Array.from(randomLogNormal(50))

    selection.append("g")
    .attr("transform", "translate(50,50)")
    .selectAll("circle")
    .data(logNormalData)
    .enter()
    .append("circle")
    .attr("r", 1)
    .attr("fill", "blue")
    .attr("cx", (d) => x(d))
    .attr("cy", (d) => y(d))

  }
  render () {
    return (
      <div ref="mainDiv">
      </div>
    );
  }
}
export default withRouter(D3APIRandom)
