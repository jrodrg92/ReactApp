import React, { Component } from 'react';
import logo from './Images/logo.svg';
import './css/Header.css';

import { Link } from 'react-router-dom';

import Proptypes from 'prop-types';

class Header extends Component {

  static propTypes = {
      title: Proptypes.string.isRequired,
      items: Proptypes.array.isRequired
  };

  render() {

    const { title, items } = this.props;

    return (
        <div className="Header">
            <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h2>{title}</h2>
                <ul className="Menu">
                    {items && items.map((item, key) =>  <li key={key}><Link to={item.url}>{item.title}</Link></li>)}
                </ul>
            </div>
        </div>
    );
  }
}

export default Header;
