import React from "react"
import { withRouter } from 'react-router'
import * as d3 from "d3"

class D3Selection  extends React.Component {
	componentDidMount () {

		var paragraphs = document.getElementsByTagName("p");
		for (var i = 0; i < paragraphs.length; i++) {
		  var paragraph = paragraphs.item(i);
		  paragraph.style.setProperty("color", "magenta", null);
		}

		// d3.selectAll("p")
	}
	render () {
		return (
			<div>
				<p>
						Lorem ipsum dolor sit amet, has agam dissentiet no. Mei malorum volutpat definitiones at...
				</p>
				<p>
						In quo animal splendide, dolorum molestie et eam, at eum facilisi adversarium. Cum munere aperiam ei, ...
				</p>
				<p>
						Ad mei falli partem praesent, eu vix nominati voluptatum. Eam et meis voluptua ponderum, malorum rationibus...
				</p>
				<p>
						Autem assum tation nec in, utinam pertinacia an qui, dicant fierent dissentiet ea mel. Mel ex elitr sensibus...
				</p>
				<p>
						At pro eius malorum probatus, duo no laudem animal. Cu agam prompta noluisse vim, et usu tota oporteat...
				</p>
			</div>
		);
	}
}
export default withRouter(D3Selection)
