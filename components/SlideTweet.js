import React from "react"
import { withRouter } from 'react-router'
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

class SlideTweet  extends React.Component {
  render () {
    return (
      <Box>
        <Hero colorIndex="#f2f3f4">
          <h1 style={{color: "#e74e50"}}>
            #jstalks #notables #d3js
          </h1>
					<h1 style={{color: "#00adef"}}>
						@samaleksov
					</h1>
        </Hero>
      </Box>
    );
  }
}
export default withRouter(SlideTweet);
