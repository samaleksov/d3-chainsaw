import React from "react"
import { withRouter } from 'react-router'
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

class SlideMagic  extends React.Component {
  render () {
    return (
      <Box style={{
        backgroundImage: 'url(/magic.gif)',
        backgroundSize: 'contain',
        minHeight: "85vh"
      }}>
      </Box>
    );
  }
}
export default withRouter(SlideMagic);
