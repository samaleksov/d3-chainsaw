import React from "react"
import { withRouter } from 'react-router'
import Heading from 'grommet/components/Heading';
import Headline from 'grommet/components/Headline';
import Paragraph from 'grommet/components/Paragraph';
import Box from 'grommet/components/Box';
import Meter from 'grommet/components/Meter';
import MarkerLabel from 'grommet/components/chart/MarkerLabel';
import Base from 'grommet/components/chart/Base';
import Layers from 'grommet/components/chart/Layers';
import Axis from 'grommet/components/chart/Axis';
import Marker from 'grommet/components/chart/Marker';
import Area from 'grommet/components/chart/Area';
import Line from 'grommet/components/chart/Line';
import Grid from 'grommet/components/chart/Grid';
import HotSpots from 'grommet/components/chart/HotSpots';
import Chart from 'grommet/components/chart/Chart';
import Value from 'grommet/components/Value';
import Label from 'grommet/components/Label';
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Legend from 'grommet/components/Legend';

class Dashboard  extends React.Component {

	componentDidMount = () => {

	}
	componentWillUnmount = () => {

	}
	render () {

		return (
			<Box>
				<Heading>
					<Headline>
						<span>Dragons</span>
					</Headline>
				</Heading>
			</Box>
		);
	}
}
export default withRouter(Dashboard);
