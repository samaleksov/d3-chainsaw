import React from "react"
import { withRouter } from 'react-router'
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

class SlideQA  extends React.Component {
  render () {
    return (
      <Box>
        <Hero colorIndex="#f2f5f3">
          <h1 style={{color: "#e74e50"}}>
             Q & A
          </h1>
        </Hero>
      </Box>
    );
  }
}
export default withRouter(SlideQA);
