import React, { Component } from "react";
import "./Header.sass";

class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="header">
          <div className="home-menu pure-menu pure-menu-horizontal pure-menu-fixed">
            <a href="" className="pure-menu-heading">
              Test
            </a>
            {/* <ul class="pure-menu-list">
              <li class="pure-menu-item">
                <a href="#" class="pure-menu-link">
                  Home
                </a>
              </li>
              <li class="pure-menu-item">
                <a href="#" class="pure-menu-link">
                  Todo
                </a>
              </li>
              <li class="pure-menu-item">
                <a href="#" class="pure-menu-link">
                  About
                </a>
              </li>
            </ul> */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Header;
