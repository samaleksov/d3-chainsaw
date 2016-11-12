import React from "react"
import { withRouter } from 'react-router'
import Animate from 'grommet/components/Animate'

class Counter  extends React.Component {
	componentWillUnmount = () => {

	}
	componentDidMount = () => {

	}
	render () {
		let counterBody = (<h1>Dragons be here</h1>);
		return (<div>
			<Animate keep={true} enter={{"animation": "slide-left", "duration": 2000}} leave={{"animation": "slide-left", "duration": 1000}} visible={true}>
				<div>{ counterBody }</div>
			</Animate>
		</div>);
	}
}

export default withRouter(Counter) ;
