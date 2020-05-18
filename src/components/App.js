import React, { Component } from 'react';
import Proptypes from 'prop-types';

import Header from './Global/Header';
import Content from './Global/Content';
import Footer from './Global/Footer';

import items from '../data/menu'

class App extends Component {

  static propTypes= {
    children: Proptypes.object.isRequired
  }

  render() {

    const {children} = this.props;

    return (
      <div className="App">
        <Header title="Aplicacion" items={items}/>
        <Content body={children}/>
        <Footer copyrigth="&copy; Welcome to React"/>
      </div>
     );
  }
}

export default App;
