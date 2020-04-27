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


    handlerClick = (event) => {
      switch (event.target.getAttribute('action')) {
        case 'redirect':
            window.open(event.target.getAttribute('url'), '_blank');
          break;
        default:
          console.log('No action pass')
          break;
      }
    }

  isEmpty =  (obj)  =>{
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

    render() {
        return (
          <div>
              <div className="navbar">
                  <div className="navbar__container">
                      <Logo></Logo>
                      <div className="menu__wrapper">
                          <Menu items={this.props.items} handlerClickMenuMobile={this.handlerClickMenuMobile}></Menu>
                      </div>
                  </div>
              </div>
              <MenuMobile items={this.props.items}  display={this.state.openMenuMobile}></MenuMobile>
          </div>
        );
    }
}

NavBar.defaultProps = {
  items:[{type: 'first', label: 'About us', position: 'right', handler:()=>{}, name:'about-us',action:'redirect', url:'https://www.youtube.com.mx/' },
        {type: 'first', label: 'Login', position: 'right', handler:()=>{}, name:'login',action:'redirect', url:'/login' },
        {type: 'secondary', label: 'Contact us', position: 'right', handler:()=>{}, name:'contact-us',action:'redirect', url:'/contact' }]
}


export default NavBar;
