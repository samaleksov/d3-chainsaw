import React from "react"
import ReactAddons from "react-addons"
import { withRouter } from 'react-router'
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Menu from 'grommet/components/Menu';
import Carousel from 'grommet/components/Carousel';
import Layer from 'grommet/components/Layer';
import Heading from 'grommet/components/Heading';
import Header from 'grommet/components/Header';
import Section from 'grommet/components/Section';
import Paragraph from 'grommet/components/Paragraph';
import Pulse from 'grommet/components/icons/Pulse';
import Image from 'grommet/components/Image';
import Spinning from 'grommet/components/icons/Spinning';
import { RouteTransition, presets } from 'react-router-transition';

class Slides  extends React.Component {
	carousel = null
	slides = ['cover', 'tweet', 'd3-selection']
	currentSlide = ""
	goToSlide = (name) => {
		return () => {
			this.currentSlide = this.slides.indexOf(name);
			this.props.router.push(`/slides/${name}`);
		}
  }
	goToNextSlide = () => {
		const currentIndex = this.slides.indexOf(this.currentSlide);
		let nextIndex = 0
		if(currentIndex >= 0 && currentIndex + 1 <= this.slides.length - 1)
			nextIndex = currentIndex + 1

		return () => {
			this.currentSlide = this.slides[nextIndex]
			this.props.router.push(`/slides/${this.currentSlide}`);
		}
  }
	goToPrevSlide = () => {
		const currentIndex = this.slides.indexOf(this.currentSlide);
		let nextIndex = this.slides.length - 1
		if(currentIndex >= 0 && currentIndex - 1 >= 0)
			nextIndex = currentIndex - 1

		return () => {
			this.currentSlide = this.slides[nextIndex]
			this.props.router.push(`/slides/${this.currentSlide}`);
		}
  }
	keyDown = (event) => {

		 let handled = false;
		 if(event.keyCode == 27)
		 {
	  		handled = true;
		 }
		 if(event.keyCode == 34 || event.keyCode == 39)
		 {
			 this.goToNextSlide()();
			 handled = true;
		 }
		 else if(event.keyCode == 33 || event.keyCode == 37)
		 {
			 this.goToPrevSlide()();
			 handled = true;
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
		const routing = this.props.location.pathname.match(/slides\/(.*)$/m)

		if(routing == null)
		{
			this.currentSlide = ""
		}
		else if(routing.length > 1)
		{
			const route = routing[1];
			this.currentSlide = route
		}
		this.reactPlayground = require("../lib/live-editor")
 	}
	componentWillUnmount () {
		window.document.removeEventListener("keydown", this.keyDown, false);
	}
	render () {
		return (

			<Box>
					<Menu inline={true} direction="row" size="small">
						<a onClick={this.goToSlide('')}>Home</a>
						<a onClick={this.goToSlide('cover')}>Cover</a>
						<a onClick={this.goToSlide('tweet')}>Tweet</a>
						<a onClick={this.goToSlide('d3-selection')}>DOM Manipulation</a>
						<a onClick={this.goToSlide('1')}>Slide 1</a>
					</Menu>
					<RouteTransition
				    pathname={this.props.location.pathname}
						{ ...presets.slideLeft } >
				    { this.props.children }
				  </RouteTransition>
			</Box>
		);
	}
}
export default withRouter(Slides);
