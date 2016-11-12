import React from "react"
import { withRouter } from 'react-router'
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';

class About  extends React.Component {
	render () {
		return (
			<Box>
				<Heading>
					<Headline>
						<span>About SignalR</span>
					</Headline>
				</Heading>
				<Paragraph>
				  ASP.NET SignalR is a new library for ASP.NET developers that makes developing real-time web functionality easy. SignalR allows bi-directional communication between server and client. Servers can now push content to connected clients instantly as it becomes available. SignalR supports Web Sockets, and falls back to other compatible techniques for older browsers. SignalR includes APIs for connection management (for instance, connect and disconnect events), grouping connections, and authorization.
				</Paragraph>
			</Box>
		);
	}
}
export default withRouter(About);
