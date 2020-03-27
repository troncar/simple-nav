import React, { Component } from 'react';
import Logo from '../commons/Logo.jsx';
import Menu from '../commons/Menu.jsx';
import MenuMobile from '../commons/MenuMobile.jsx';

import "./NavBar.scss";


class NavBar extends Component {

    state = {  }

    handlerClick = (event) => {

    }

    render() {
        return (
          <div>
              <div className="navbar">
                  <div className="navbar__container">
                      <Logo></Logo>
                      <div className="menu__wrapper">
                          <Menu handlerClick={this.handlerClick}></Menu>
                      </div>
                  </div>
              </div>
            <MenuMobile></MenuMobile>
          </div>
        );
    }
}

export default NavBar;
