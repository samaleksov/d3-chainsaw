import React from "react"
import { withRouter } from 'react-router'
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

class SlideDragons  extends React.Component {
  render () {
    return (
      <Box style={{
        backgroundImage: 'url(/herebedragons_2.png)',
        backgroundSize: 'contain',
        minHeight: "85vh"
      }}>
      </Box>
    );
  }
}
export default withRouter(SlideDragons);
