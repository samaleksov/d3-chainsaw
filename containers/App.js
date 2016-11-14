import React, { PropTypes } from 'react';
import GrommetApp from 'grommet/components/App';
import Article from 'grommet/components/Article';
import Header from 'grommet/components/Header';
import Title from 'grommet/components/Title';
import Box from 'grommet/components/Box';
import Footer from 'grommet/components/Footer';
import TextInput from 'grommet/components/TextInput';
import { withRouter } from 'react-router'
import Form from 'grommet/components/Form';
import FormFields from 'grommet/components/FormFields';
import CheckBox from 'grommet/components/CheckBox';
import Image from 'grommet/components/Image';
import Notification from 'grommet/components/Notification';
import Button from 'grommet/components/Button';
import Close from 'grommet/components/icons/base/Close';
import moment from "moment"

class App extends React.Component {
  goHome = () => {
    this.props.router.push('/');
  }
  componentDidMount = () => {
	}
	componentWillUnmount = () => {

  }
  render () {
    const currentLocation = this.props.location.pathname;
    const headerAndFooter = (currentLocation.indexOf("slides") !== -1);

    const childrenWithProps = React.Children.map(this.props.children,
     (child) => React.cloneElement(child, {
       onNavigate: this.onNavigate
     })
    );

    return (
      <GrommetApp inline={false} centered={!headerAndFooter}>
        <Box primary={true} full={true} pad="small">
          <Header size="large" justify="between" colorIndex="grey-2-a" pad={{"horizontal": "medium", "vertical" : "medium"}}>
            <a style={{color: "White"}} onClick={this.goHome}><Image src="/techtalks.png" size="small" fit="contain" alt="Tech Talks" /></a>
          </Header>
          <Box flex="grow">
            {childrenWithProps}
          </Box>
          <div style={{ visibility: !headerAndFooter ? "visible" : "hidden"}}>
            <Footer justify="between" colorIndex="grey-1" size="large" primary={true} pad={{"horizontal": "medium", "vertical" : "medium"}}>
            </Footer>
          </div>
        </Box>
      </GrommetApp>
    )
  }
}
App.propTypes = {
  children: PropTypes.node
};

export default withRouter(App);
