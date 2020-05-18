import React, { Component } from 'react';
import './css/App.css';
import Proptypes from 'prop-types';

class Footer extends Component {

  static propTypes = {
    copyrigth: Proptypes.string
  };
  
  render() {
    const {copyrigth = '&copy; React 2019'} = this.props;
    return (
        <div className="Footer">
          <p dangerouslySetInnerHTML={{ __html: copyrigth }}/>
        </div>
    );
  }
}

export default Footer;