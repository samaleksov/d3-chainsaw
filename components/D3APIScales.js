import React from "react"
import { withRouter } from 'react-router'
import * as d3 from "d3"

class D3APIScales  extends React.Component {
  componentDidMount () {



    const data = [
       1, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100
    ]

    let selection = d3.select(this.refs.mainDiv).append("div").style("flex-direction", "column")

    // Linear

    const x = d3.scaleLinear()
    .domain([1, 100])
    .range([1, 100])

    selection.append("p").text(`Linear scale: ${ data.map((d) => x(d)).join(', ') }`)


    selection.append("div")
    .selectAll("div").data(data).enter().append("div").style("height", "10vh").style("background-color",(d) => x(d))

    // Exponential

    const xPow = d3.scalePow().exponent(2)
    .domain([1, 100])
    .range([1, 10000])

    selection.append("p").text(`Power scale: ${ data.map((d) => xPow(d)).join(', ') }`)


    selection.append("div")
    .selectAll("div").data(data).enter().append("div").style("height", "10vh").style("background-color",(d) => xPow(d))

    // Logarithmic

    const xLog = d3.scaleLog()
    .domain([1, 100])
    .range([1, 100])

    selection.append("p").text(`Log scale: ${ data.map((d) => xLog(d)).join(', ') }`)


    selection.append("div")
    .selectAll("div").data(data).enter().append("div").style("height", "10vh").style("background-color",(d) => xLog(d))


  }
  render () {
    return (
      <div ref="mainDiv">
      </div>
    );
  }
}
export default withRouter(D3APIScales)
