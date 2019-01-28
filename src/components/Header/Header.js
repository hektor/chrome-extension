import React, { Component } from "react";
import "./Header.sass";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
            <div href="#" className="pure-menu-heading">
              ttestt
            </div>
            <ul className="pure-menu-list">
              <li className="pure-menu-item">Home</li>
              <li className="pure-menu-item">Todo</li>
              <li className="pure-menu-item">About</li>
            </ul>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
