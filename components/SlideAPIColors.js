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

class SlideAPIColors  extends React.Component {
  state = {
    loaded: false
  }
  componentDidMount () {
    window.document.addEventListener("keydown", this.keyDown, false);
    const playground = require("../lib/live-editor")
    const exampleCode = require("!raw-loader!./D3APIColors.js")
    this.setState({ ...this.state, exampleCode, playground, loaded: true })
  }
  componentWillUnmount () {
    window.document.removeEventListener("keydown", this.keyDown, false);
  }
  render () {

    let playground = (<div>Loading playground</div>)

    if(this.state.loaded)
    {
      playground = (<this.state.playground codeText={ this.state.exampleCode } />)
    }
    return (
      <Box>
        <h1><span style={{ color: 'red' }}>C</span><span style={{ color: 'green' }}>O</span><span style={{ color: 'blue' }}>L</span><span style={{ color: 'red' }}>O</span><span style={{ color: 'green' }}>R</span><span style={{ color: 'blue' }}>S</span></h1>
        <div className="component-documentation">
          { playground }
        </div>

      </Box>
    );
  }
}
export default withRouter(SlideAPIColors);
