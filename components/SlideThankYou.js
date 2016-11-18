import React from "react"
import { withRouter } from 'react-router'
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

class SlideThankYou  extends React.Component {
  render () {
    return (
      <Box>
        <Hero colorIndex="#f2f5f3">
          <span style={{color: "#e74e50"}}>
            <h1>
              Thank you!
            </h1>
            <h1>
              <a style={{ color: "#00adef"}} href="https://github.com/samaleksov/d3-chainsaw">https://github.com/samaleksov/d3-chainsaw</a>
            </h1>
          </span>
        </Hero>
      </Box>
    );
  }
}
export default withRouter(SlideThankYou);
