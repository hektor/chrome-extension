import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './Header.sass';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Header-header">
          <img src={logo} className="Header-logo" alt="logo" />
          <div className="pure-g">
            <div className="pure-u-1-3">test</div>
            <div className="pure-u-1-3">test</div>
            <div className="pure-u-1-3">test</div>
          </div>
        </header>
      </div>
    );
  }
}

export default Header;
