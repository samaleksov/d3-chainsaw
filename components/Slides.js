import React from "react"
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

import Playground from "component-playground";

class Slides  extends React.Component {
	carousel = null
	keyDown = (event) => {
		 let handled = false;
		 if(event.keyCode == 27)
		 {
	  		handled = true;
		 }
		 if(!!this.carousel)
		 {
			 if(event.keyCode == 34 || event.keyCode == 39)
			 {
				 this.carousel._slideNext();
				 handled = true;
			 }
			 else if(event.keyCode == 33 || event.keyCode == 37)
			 {
				 this.carousel._slidePrev();
				 handled = true;
			 }
		 }
		 if(handled)
		 {
			 event.preventDefault();
			 return false;
		 }
		 return true;
 	}
  componentDidMount () {
    window.document.addEventListener("keydown", this.keyDown, false);
 	}
	componentWillUnmount () {
		window.document.removeEventListener("keydown", this.keyDown, false);
	}
	render () {
		var basicShapesExample = require("raw-loader!./BasicShapes.example");
		console.log(basicShapesExample);
		return (
			<Box full={true} primary={true}>
				<Carousel infinite={false} ref={(c) => this.carousel = c} autoplay={false} persistentNav={false} >
					<Hero colorIndex="#f2f5f3">
						<Box>
							<Image src="/jstalks-logo.png" size="medium" fit="contain" alt="js.talks();" />
						</Box>
						<span>
							<h1 style={{color: "#e74e50"}}>
								Sam Aleksov
							</h1>
							<h3 style={{color: "#00adef"}}>
								@samaleksov | samuil_aleksov@epam.com
							</h3>
						</span>
					</Hero>
					<Hero colorIndex="#f2f3f4">
						<h1 style={{color: "#e74e50"}}>
							 #jstalks
						</h1>
					</Hero>
					<Hero backgroundImage="/iStock_000065756809_Large_2.jpg">
						<h1>
							Advanced Data Visualization With D3.js
						</h1>
					</Hero>
					<div className="component-documentation">
		        <Playground codeText={basicShapesExample} scope={{React: React }}/>
		      </div>
					<Hero backgroundImage="/iStock_000009322434_Full.jpg" colorIndex="neutral-2">
						<Box size="xsmall">
							<h1 style={{backgroundColor: "Black", textAlign: "center"}}>
								Doctors!
							</h1>
						</Box>
					</Hero>
					<Hero colorIndex="neutral-1">
						<Box size="medium">
								<h1>Don't waste my <Spinning /></h1>
						</Box>
					</Hero>
					<Hero backgroundImage="/the_internet.jpg" colorIndex="neutral-2">
						<Box size="xsmall">
							<h1 style={{backgroundColor: "Black", textAlign: "center"}}>
								THE INTERNET
							</h1>
						</Box>
					</Hero>
					<Hero>
						<Box size="xsmall">
						</Box>
					</Hero>
					<Box align="center" alignSelf="center" size="xxlarge" colorIndex="light-1">
						<h1>
							The big picture
						</h1>
						<Image src="/what_is_signalr_invocation.png" size="large" fit="contain" alt="The big picture" />
					</Box>
					<Box align="center" alignSelf="center" size="xxlarge" colorIndex="light-1">
						<h1>
							In depth look
						</h1>
						<Image src="intro_architecture.png" size="large" fit="contain" alt="Architecture" />
					</Box>
					<Hero backgroundImage="/coffee.jpg">
						<h1>
							The code
						</h1>
					</Hero>
					<Hero backgroundImage="/iStock_82972681_web.jpg">
						<h1>
							Demo time
						</h1>
					</Hero>
					<Hero colorIndex="ok">
						<h1 style={{color: "White"}}>
							 Q & A
						</h1>
					</Hero>
					<Hero colorIndex="ok">
						<Image src="/giphy.gif" size="large" alt="mindblown" />
						<h1 style={{color: "White"}}>
							 VB out of the box
						</h1>
					</Hero>
					<Hero colorIndex="ok">
						<h1 style={{color: "White"}}>
							 Runs everywhere!
						</h1>
					</Hero>
					<Hero colorIndex="ok">
						<span style={{color: "White"}}>
							<h1>
								Thank you!
							</h1>
							<h1>
								<a style={{ color: "White"}} href="https://github.com/samaleksov/d3-chainsaw">https://github.com/samaleksov/d3-chainsaw</a>
							</h1>
						</span>
					</Hero>
				</Carousel>
			</Box>
		);
	}
}
export default withRouter(Slides);
