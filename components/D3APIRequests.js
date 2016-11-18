import React from "react"
import { withRouter } from 'react-router'
import * as d3 from "d3"

class D3APIRequests  extends React.Component {
  componentDidMount () {

    const results = d3.select("#results")

    d3.xml('/response.xml', (error, data) => {
        if (error) throw error
        const name = d3.select(data).select("name").text()
        const age = d3.select(data).select("age").text()

        const rawFile = require("!raw-loader!../public/response.xml")

        results.append("p").text(`XML`)
        results.append("pre").style("white-space", "pre-wrap").text(`${rawFile}`)
        results.append("p").text(`Parsed manually, name: ${name}, age: ${age}`)
    })

  	d3.csv('/response.csv', (error, data) => {
          if (error) throw error
          const rawFile = require("!raw-loader!../public/response.csv")
          results.append("p").text(`CSV`)
          results.append("pre").style("white-space", "pre-wrap").text(`${rawFile}`)
          results.append("p").text(`${JSON.stringify(data)}`)
    })

    d3.tsv('/response.tsv', (error, data) => {
          if (error) throw error
          const rawFile = require("!raw-loader!../public/response.tsv")
          results.append("p").text(`TSV`)
          results.append("pre").style("white-space", "pre-wrap").text(`${rawFile}`)
          results.append("p").text(`${JSON.stringify(data)}`)
    })

    d3.json('/response.json', (error, data) => {
          if (error) throw error
          const rawFile = require("!raw-loader!../public/response.json")
          results.append("p").text(`JSON`)
          results.append("pre").style("white-space", "pre-wrap").text(`${rawFile}`)
          results.append("p").text(`${JSON.stringify(data)}`)
    })
  }
  render () {
    return (
      <div>
        <p id="results"></p>
      </div>
    );
  }
}
export default withRouter(D3APIRequests)
