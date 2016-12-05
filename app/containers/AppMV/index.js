import React from 'react';
import styled from 'styled-components';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Wrapper = styled.div`
  // ceva e funky aici, n-ar trebui sa fie nevoie de asta
  overflow-x: hidden;
`;

export default class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    children: React.PropTypes.node,
  };

  render() {
    return (
      <Wrapper className="wrap">
        <Header {...this.props.location} />
        {React.Children.toArray(this.props.children)}
        <Footer />
      </Wrapper>
    );
  }
}

App.propTypes = {
  location: React.PropTypes.object,
};