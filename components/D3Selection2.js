import React from "react"
import { withRouter } from 'react-router'
import * as d3 from "d3"

class D3Selection2  extends React.Component {
  componentDidMount () {

    const data = [
      'Lorem ipsum dolor sit amet, has agam dissentiet no. Mei malorum volutpat definitiones at...',
      'In quo animal splendide, dolorum molestie et eam, at eum facilisi adversarium. Cum munere aperiam ei, ...',
      'Ad mei falli partem praesent, eu vix nominati voluptatum. Eam et meis voluptua ponderum, malorum rationibus...',
      'Autem assum tation nec in, utinam pertinacia an qui, dicant fierent dissentiet ea mel. Mel ex elitr sensibus...'
    ]

  }
  render () {
    return (
      <div id="workspace">
      </div>
    );
  }
}
export default withRouter(D3Selection2)
