import React from "react"
import { withRouter } from 'react-router'
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

class SlideSaveTheDate  extends React.Component {
  render () {
    return (
      <Box>
        <Hero colorIndex="#f2f5f3">
          <span style={{color: "#e74e50"}}>
            <h1>
              26 November 2016
            </h1>
            <h1>
              <a style={{ color: "#00adef"}} href="http://techtalks.bg/">SPS Tower, 72 Todor Kableshkov Blvd., Sofia</a>
            </h1>
          </span>
        </Hero>
      </Box>
    );
  }
}
export default withRouter(SlideSaveTheDate);
