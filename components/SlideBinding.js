import React from "react"
import ReactAddons from "react-addons"
import { withRouter } from 'react-router'
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Carousel from 'grommet/components/Carousel';
import Layer from 'grommet/components/Layer';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import Section from 'grommet/components/Section';
import Paragraph from 'grommet/components/Paragraph';
import Pulse from 'grommet/components/icons/Pulse';
import Image from 'grommet/components/Image';
import Spinning from 'grommet/components/icons/Spinning';

class SlideSelection1  extends React.Component {
	state = {
		loaded: false
	}
  componentDidMount () {
    window.document.addEventListener("keydown", this.keyDown, false);
		const playground = require("../lib/live-editor")
		const exampleCode = require("!raw-loader!./D3Selection2.js")
		this.setState({ ...this.state, exampleCode, playground, loaded: true })
 	}
	componentWillUnmount () {
		window.document.removeEventListener("keydown", this.keyDown, false);
	}
	render () {

		/*
				const update = (data) => {
						const p = d3.select("#workspace")
						.selectAll("p")
							.data(data)

					p.enter().append("p").text((d) => d).transition().duration(500).style("color", "lime").ease(d3.easeCubic)
					p.exit().transition().duration(500).style("opacity", 0).ease(d3.easeCubic).remove()
					p.interrupt().style("color", "black").text((d) => d)

			}

			update(data)

			d3.timeout(() => update([1,2,3,4,5]), 1000)
			d3.timeout(() => update([1,2,3,4,5,6]), 2000)
			d3.timeout(() => update([1,2,3,4,5,6,7]), 3000)
			d3.timeout(() => update([1,2,3,4,5,6]), 4000)


		*/

		let playground = (<div>Loading playground</div>)

		if(this.state.loaded)
		{
			playground = (<this.state.playground codeText={ this.state.exampleCode } />)
		}
		return (
			<Box>
					<h1>Hello Data!</h1>
					<div className="component-documentation">
					  { playground }
		      </div>

			</Box>
		);
	}
}
export default withRouter(SlideSelection1);
