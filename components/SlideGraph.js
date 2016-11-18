import React from "react"
import { withRouter } from 'react-router'
import Box from 'grommet/components/Box';
import ForceDirectedGraph from './ForceDirectedGraph';
class SlideGraph  extends React.Component {
  componentDidMount () {
    window.document.addEventListener("keydown", this.keyDown, false);
  }
  componentWillUnmount () {
    window.document.removeEventListener("keydown", this.keyDown, false);
  }
  render () {

    return (
      <Box full={true} flex={true} style={{ flex: 1}}>
        <h1>Use it</h1>
        <ForceDirectedGraph />
      </Box>
    );
  }
}
export default withRouter(SlideGraph);
