import React from "react"
import { withRouter } from 'react-router'
import Hero from 'grommet/components/Hero';
import Box from 'grommet/components/Box';
import Image from 'grommet/components/Image';

class SlideExamples  extends React.Component {
  render () {
    return (
      <div style={{ display: "flex", flexWrap: "wrap"}}>
        <img style={{ maxHeight: "260px", maxWidth: "300px"}} src="/examples/687474703a2f2f692e696d6775722e636f6d2f59447964775a692e676966.gif" />
        <img style={{ maxHeight: "260px", maxWidth: "300px"}} src="/examples/Dqg8jli.gif" />
        <img style={{ maxHeight: "260px", maxWidth: "300px"}} src="/examples/Gooey-effect-circle.gif" />
        <img style={{ maxHeight: "260px", maxWidth: "300px"}} src="/examples/h7n9.gif" />
        <img style={{ maxHeight: "260px", maxWidth: "300px"}} src="/examples/InteractiveVectors.gif" />
        <img style={{ maxHeight: "260px", maxWidth: "300px"}} src="/examples/mBIXf.gif" />
        <img style={{ maxHeight: "260px", maxWidth: "300px"}} src="/examples/oslopop.gif" />
        <img style={{ maxHeight: "260px", maxWidth: "300px"}} src="/examples/r5LPa.gif" />
        <img style={{ maxHeight: "260px", maxWidth: "300px"}} src="/examples/react-d3.gif" />
        <img style={{ maxHeight: "260px", maxWidth: "300px"}} src="/examples/SLEej.gif" />
        <img style={{ maxHeight: "260px", maxWidth: "300px"}} src="/examples/t3cpO.gif" />
        <img style={{ maxHeight: "260px", maxWidth: "300px"}} src="/examples/viz_demo.gif" />
        <img style={{ maxHeight: "260px", maxWidth: "300px"}} src="/examples/EventDrops.gif" />
        <a style={{ display: "inline-block", minHeight: "260px", minWidth: "300px"}} href="https://github.com/d3/d3/wiki/Gallery" target="_blank">
          <Box pad="small"  direction="row" justify="center"  colorIndex="neutral-1" flex="true" align="center" alignContent="between" style={{ minHeight: "260px", minWidth: "300px"}}>
            <h1>D3 Gallery</h1>
          </Box>
        </a>
        <a style={{ display: "inline-block", minHeight: "260px", minWidth: "300px"}} href="http://bl.ocks.org/mbostock" target="_blank">
          <Box pad="small" direction="row" justify="center" colorIndex="brand" flex={true} align="center" alignContent="between" style={{ minHeight: "260px", minWidth: "300px"}}>
            <h1>Infinite examples @ Mike Bostock's Blocks</h1>
          </Box>
        </a>
      </div>
    );
  }
}
export default withRouter(SlideExamples);
