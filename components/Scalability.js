import React from "react"
import { withRouter } from 'react-router'
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';

class Scalability  extends React.Component {
  render () {
    return (
      <Box>
        <Heading>
          <Headline>
            <span>SignalR Scaleout with SQL Server</span>
          </Headline>
        </Heading>
        <Paragraph>
          Use SQL Server to distribute messages across a SignalR application that is deployed in two separate IIS instances. You can also run this tutorial on a single test machine, but to get the full effect, you need to deploy the SignalR application to two or more servers. You must also install SQL Server on one of the servers, or on a separate dedicated server. Another option is to run the tutorial using VMs on Azure.
        </Paragraph>
      </Box>
    );
  }
}
export default withRouter(Scalability);
