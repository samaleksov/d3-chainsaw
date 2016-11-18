import React from "react"
import { withRouter } from 'react-router'
import * as d3 from "d3"

class D3APIArrays  extends React.Component {
  componentDidMount () {

    // Statistics

    const data = [1, 1, 1,
      2, 2,
      3, 3, 3,
      4, 4, 4, 4,
      5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      6,
      7,
      8, 8,
      10]

      let selection = d3.select(this.refs.mainDiv).append("div").html("<h1> Statistics </h1>").style("flex-direction", "column")

      selection.append("p").text(`Data: ${data}`)

      selection.append("p").text(`Min: ${d3.min(data)}`)

      selection.append("p").text(`Max: ${d3.max(data)}`)

      selection.append("p").text(`Sum: ${d3.sum(data)}`)

      selection.append("p").text(`Extent: ${d3.extent(data)}`)

      selection.append("p").text(`Mean: ${d3.mean(data)}`)

      selection.append("p").text(`Median: ${d3.median(data)}`)

      selection.append("p").text(`σ: ${d3.deviation(data)}`)

      // Search

      const distinctData = [10, 8, 7, 6, 5, 4, 3, 2, 1]
      // d3.map(data, (d) => d).keys().map((key) => parseInt(key)).reverse()

      selection = d3.select(this.refs.mainDiv).append("div").html("<h1> Search </h1>").style("flex-direction", "column")

      selection.append("p").text(`Data: ${distinctData}`)

      selection.append("p").text(`Scan: ${d3.scan(distinctData, (a, b) => a - b) }`)

      selection.append("p").text(`bisectLeft 9: ${d3.bisectLeft(distinctData, 9)}`)

      selection.append("p").text(`ascending 5 8: ${d3.ascending(5, 8)}`)

      // selection.append("p").text(`sort ascending: ${''}`)
      // selection.append("p").text(`sort d3.ascending: ${''}`)



    }
    render () {
      return (
        <div ref="mainDiv">
        </div>
      );
    }
  }
  export default withRouter(D3APIArrays)
