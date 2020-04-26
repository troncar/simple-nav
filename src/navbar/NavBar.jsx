import React, { Component } from 'react';
import Logo from '../commons/Logo.jsx';
import Menu from '../commons/Menu.jsx';
import MenuMobile from '../commons/MenuMobile.jsx';

import "./NavBar.scss";


class NavBar extends Component {

    constructor(props){
      super(props)
      this.state = {
        openMenuMobile: false,
      };
    }


    handlerClickMenuMobile = (event) => {
      this.setState({openMenuMobile: !this.state.openMenuMobile})
      event.stopPropagation();
    }

    render() {
        return (
          <div>
              <div className="navbar">
                  <div className="navbar__container">
                      <Logo></Logo>
                      <div className="menu__wrapper">
                          <Menu handlerClickMenuMobile={this.handlerClickMenuMobile}></Menu>
                      </div>
                  </div>
              </div>
              <MenuMobile display={this.state.openMenuMobile}></MenuMobile>
          </div>
        );
    }
}

export default NavBar;
