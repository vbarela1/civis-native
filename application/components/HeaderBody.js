import React from 'react';
import { ScrollView, Image } from 'react-native';
import { Header, Title, Button, Left, Right, Body, Icon } from 'native-base';
import { Link, withRouter } from 'react-router-native';

class HeaderBody extends React.Component {
  state = { location: "/", canGoForward: false }

  componentWillReceiveProps(props) {
    this.setState({ location: props.location.pathname })
    const { entries } = props.history
    if ( props.location.key != entries[entries.length - 1].key )
      this.setState({ canGoForward: true })
    else
      this.setState({ canGoForward: false })
  }

  displayBackButton = () => {
    const { location } = this.state
    if (location !== '/') {
      return(
        <Button transparent onPress={ () => this.props.history.goBack() }>
          <Icon name='arrow-back' />
        </Button>
      );
    }
  }

  displayForwardButton = () => {
    if ( this.state.canGoForward ) {
      return(
        <Button transparent onPress={ () => this.props.history.goForward() }>
          <Icon name='arrow-forward' />
        </Button>
      );
    }
  }

  // TODO: Change CIVIS to be logo svg
  render(){
    return(
      <Header>
        <Left>
          {this.displayBackButton()}
        </Left>
        <Body>
          <Image
            source={require('../images/civis.png')}
            style={{height: 40 }}
          />
          {/* <Title>CIVIS</Title> */}
        </Body>
        <Right>
          {this.displayForwardButton()}
        </Right>
      </Header>
    );
  }
}

export default HeaderBody = withRouter(HeaderBody);
