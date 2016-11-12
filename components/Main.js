import React from "react"
import Tiles from 'grommet/components/Tiles';
import Tile from 'grommet/components/Tile';
import Header from 'grommet/components/Header';
import Heading from 'grommet/components/Heading';
import Box from 'grommet/components/Box';
import Carousel from 'grommet/components/Carousel';
import { withRouter } from 'react-router'

class Main  extends React.Component {
	state = {
		tiles: [
			{
				id: 1,
				carousel: true,
				color: "neutral-1",
				items: [
					{
						id: 1,
						title: "Social Counter",
						description: "Send changes to WebAPI that will then notify SignalR",
						link: {
							pathname: '/counter',
							query: { incrementsBy: 1 }
						}
					},
					{
						id: 2,
						title: "Social Counter 10",
						description: "Send changes to WebAPI that will then notify SignalR",
						link: {
							pathname: '/counter',
							query: { incrementsBy: 10 }
						}
					},
					{
						id: 3,
						title: "Social Counter 42",
						description: "Send changes to WebAPI that will then notify SignalR",
						link: {
							pathname: '/counter',
							query: { incrementsBy: 42 }
						}
					}
				]
			},
			{
				id: 2,
				title: "Stock Ticker",
				description: "Use SQL Dependency to get notified about stock price changes",
				color: "neutral-2",
				link: "/stock-tickers"
			},
			{
				id: 3,
				title: "Dashboard",
				description: "Monitor system resources",
				color: "neutral-3",
				link: "/dashboard"
			},
			{
				id: 4,
				title: "D3 Graph",
				description: "Notify graph changes",
				color: "neutral-1",
				link: "/"
			},
			{
				id: 5,
				title: "About",
				description: "SignalR",
				color: "grey-1",
				link: "about-signalr"
			},
			{
				id: 7,
				title: "Scaleout",
				description: "SignalR with SQL Server",
				color: "warning",
				link: "/scalability"
			},
			{
				id: 8,
				title: "SQLDependency",
				description: "Use SQLDependency to listen for live data changes",
				color: "grey-3-a",
				link: "/sqldependency"
			},
			{
				id: 6,
				title: "Slides",
				description: "The boring stuff",
				color: "neutral-4-a",
				link: "slides"
			}
		]
	}
	onSelect = (item) => {
		this.props.router.push(item.link);
		this.props.onNavigate(item.link);
	}
	render () {
		return (
			<Tiles fill={true} >
				{
					this.state.tiles.map((tile) => {
						if(tile.carousel)
						{
							return (
							<Tile key={tile.id} align="start" basis="small" flex={false} colorIndex={tile.color}>
								<Carousel persistentNav={false} autoplaySpeed={2000}>
									{
										tile.items.map((item) => {
											return (
												<Box key={item.id}>
													<a onClick={this.onSelect.bind(this, item)}>
														<Header size="small" pad={{"horizontal": "small"}}>
												      <Heading tag="h4">
												        <strong style={{color: "White"}}>
												          {item.title}
												        </strong>
												      </Heading>
												    </Header>
												    <Box pad="small">
												      <p>
												        {item.description}
												      </p>
												    </Box>
													</a>
												</Box>
											)
										})
									}
								</Carousel>
						  </Tile>
							)
						}else {
							return (
							<Tile key={tile.id} align="start" basis="small" flex={false} colorIndex={tile.color}>
								<a onClick={this.onSelect.bind(this, tile)}>
									<Header size="small" pad={{"horizontal": "small"}}>
							      <Heading tag="h4">
							        <strong style={{color: "White"}}>
							          {tile.title}
							        </strong>
							      </Heading>
							    </Header>
							    <Box pad="small">
							      <p>
							        {tile.description}
							      </p>
							    </Box>
								</a>
						  </Tile>
						)
						}
					})
				}
			</Tiles>
		);
	}
}
export default withRouter(Main);
