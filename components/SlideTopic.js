import React from "react"
import { withRouter } from 'react-router'
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

class SlideTopic  extends React.Component {
  render () {
    return (
      <Box>
        <Hero backgroundImage="/iStock_000065756809_Large_2.jpg">
          <h1>
            Advanced Data Visualization With D3.js
          </h1>
        </Hero>
      </Box>
    );
  }
}
export default withRouter(SlideTopic);
