import React from "react"
import { withRouter } from 'react-router'
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

class SlideCover  extends React.Component {
  render () {
    return (
      <Box>
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
      </Box>
    );
  }
}
export default withRouter(SlideCover);
