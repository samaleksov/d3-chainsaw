import React from "react"
import { withRouter } from 'react-router'
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

class SlideShire  extends React.Component {
  render () {
    return (
      <Box style={{
        backgroundImage: 'url(/eaf.gif)',
        backgroundSize: 'contain',
        minHeight: "85vh"
      }}>
      </Box>
    );
  }
}
export default withRouter(SlideShire);
