import React from "react"
import { withRouter } from 'react-router'
import moment from "moment"
import Animate from 'grommet/components/Animate';
import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import Down from 'grommet/components/icons/base/Down';
import Up from 'grommet/components/icons/base/Up';

class StockTickers  extends React.Component {
	componentWillUnmount = () => {
	}
	componentDidMount = () => {

	}
	render () {
			let counterBody = (<h1>Here be dragons</h1>);
			return (<div>
				<Animate keep={true} enter={{"animation": "slide-left", "duration": 2000}} leave={{"animation": "slide-left", "duration": 1000}} visible={true}>
					<div>{ counterBody }</div>
				</Animate>
			</div>);
	}
}

export default withRouter(StockTickers) ;
