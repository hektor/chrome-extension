import React, { Component } from 'react';
import logo from '../../images/logo.svg';
import './Header.sass';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <header className="Header-header">
          <img src={logo} className="Header-logo" alt="logo" />
          <p>
            Edit <code>src/Header.js</code> and save to reload.
          </p>
          <a
            className="Header-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default Header;
