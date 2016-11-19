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
        title: "Force Directed Graph",
        description: "Using d3.forceSimulation",
        color: "neutral-1",
        link: '/force-directed-graph'
      },
      {
        id: 2,
        title: "Examples",
        description: "It's up to your immagination!",
        color: "neutral-2",
        link: "/slides/examples"
      },
      {
        id: 3,
        title: "WebVR",
        description: "A-Frame, three.js",
        color: "neutral-3",
        link: "/webvr"
      },
      {
        id: 4,
        title: "The Force",
        description: "Use it",
        color: "neutral-1",
        link: "/force1"
      },
      {
        id: 9,
        title: "The Force",
        description: "Links",
        color: "neutral-4-a",
        link: "/force2"
      },
      {
        id: 5,
        title: "Basic Shapes",
        description: "Let's draw some triangles",
        color: "grey-1",
        link: "basic-shapes"
      },
      {
        id: 7,
        title: "Data Binding",
        description: "Join data with elements",
        color: "warning",
        link: "/d3-selection-data-binding"
      },
      {
        id: 8,
        title: "D3 Selection",
        description: "Selections allow powerful data-driven transformation of the DOM",
        color: "neutral-1",
        link: "/d3-selection"
      },
      {
        id: 10,
        title: "Axis",
        description: "Human readable axis",
        color: "neutral-2",
        link: "/api-axis"
      },
      {
        id: 11,
        title: "Arrays",
        description: "Search, transform, stats",
        color: "neutral-3",
        link: "/api-arrays"
      },
      {
        id: 13,
        title: "Colors",
        description: "For a better world",
        color: "neutral-1",
        link: "/api-colors"
      },
      {
        id: 12,
        title: "Scales",
        description: "Abstract your visualization",
        color: "grey-3-a",
        link: "/api-scales"
      },
      {
        id: 6,
        title: "Slides",
        description: "The boring stuff",
        color: "neutral-4-a",
        link: "/slides/cover"
      }
    ]
  }
  onSelect = (item) => {
    this.props.router.push(item.link);
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
export default withRouter(Main)
