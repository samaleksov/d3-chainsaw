import React from "react"
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
  slides = [ 'cover', 'tweet', 'topic', 'table-tables', 'dragons', 'excel', 'tables', 'no-tables',
          'd3-selection', 'd3-selection-data-binding',
                  'shire',
                  'arrays', 'scales', 'magic',
          'colors',  'axis', 'requests', 'random', 
          'shapes', 'matrix', 'the-force', 'the-force2', 'graphs', 'examples','gandalf', 'next',
          'qa','save-the-date', 'thankyou']

  currentSlide = ""
  goToSlide = (name) => {
    return () => {
      this.currentSlide = name;
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

    this.reactPlayground = require("../lib/live-editor")
  }
	componentWillMount () {
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
	}
  componentWillUnmount () {
    window.document.removeEventListener("keydown", this.keyDown, false);
  }
  render () {
    return (

      <Box flex={true} className="slidesContainer">
        <Menu inline={true} direction="row" size="small">
          <a style={ this.currentSlide == 'cover' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('cover')}>Cover</a>
          <a style={ this.currentSlide == 'tweet' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('tweet')}>Tweet</a>
          <a style={ this.currentSlide == 'topic' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('topic')}>Topic</a>
          <a style={ this.currentSlide == 'tables' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('tables')}>Tables</a>
          <a style={ this.currentSlide == 'no-tables' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('no-tables')}>Notables</a>
          <a style={ this.currentSlide == 'd3-selection' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('d3-selection')}>DOM</a>
          <a style={ this.currentSlide == 'd3-selection-data-binding' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('d3-selection-data-binding')}>Hello Data</a>
          <a style={ this.currentSlide == 'arrays' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('arrays')}>Arrays</a>
          <a style={ this.currentSlide == 'scales' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('scales')}>Scales</a>
          <a style={ this.currentSlide == 'colors' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('colors')}>Colors</a>
          <a style={ this.currentSlide == 'axis' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('axis')}>Axis</a>
          <a style={ this.currentSlide == 'requests' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('requests')}>Requests</a>
          <a style={ this.currentSlide == 'random' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('random')}>Random</a>
          <a style={ this.currentSlide == 'shapes' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('shapes')}>Let's draw</a>
          <a style={ this.currentSlide == 'the-force' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('the-force')}>The force</a>
					<a style={ this.currentSlide == 'the-force2' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('the-force2')}>Links</a>
					<a style={ this.currentSlide == 'graphs' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('graphs')}>Graphs</a>
					<a style={ this.currentSlide == 'examples' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('examples')}>Examples</a>
          <a style={ this.currentSlide == 'next' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('next')}>Next</a>
					<a style={ this.currentSlide == 'qa' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('qa')}>Q & A</a>
          <a style={ this.currentSlide == 'save-the-date' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('save-the-date')}>Save the date</a>
					<a style={ this.currentSlide == 'thankyou' ? {color: "#e74e50"} : { color: "#00adef"}} onClick={this.goToSlide('thankyou')}>Thank You</a>
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
