import React from "react"
import { withRouter } from 'react-router'
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';

class SQLDependency  extends React.Component {
	render () {
		return (
			<Box>
				<Heading>
					<Headline>
						<span>SQLDependency is your friend</span>
					</Headline>
				</Heading>
				<Paragraph>
				  The SqlDependency object represents a query notification dependency between an application and an instance of SQL Server. An application can create a SqlDependency object and register to receive notifications via the OnChangeEventHandler event handler.
				</Paragraph>
			</Box>
		);
	}
}
export default withRouter(SQLDependency);
