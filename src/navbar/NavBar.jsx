import React, { Component } from 'react';
import Logo from '../commons/Logo.jsx';
import Menu from '../commons/Menu.jsx';
import MenuMobile from '../commons/MenuMobile.jsx';
import Item  from '../commons/Item.jsx';
import { ITEMS, ITEMS_MOBILE }  from '../utils/utils';

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

  checkHandlerEmpty = (items) => {
      return items.map( item => {
          if(this.isEmpty(item.handler)){
            item.handler = this.handlerClick;
          }
          return item;
      })
  }


    buildItems = (items) => {
      if(!!items){
        return items.map((item, index) => (
          <Item
            key={`${index}--${item.name}`}
            type= {item.type}
            label={item.label}
            position={item.position}
            handler={item.handler}
            name={item.name}
            customClass = {item.customClass ? item.customClass : ''}
            action={item.action}
            url={item.url}
          />
        ))
      }
    }

    render() {

        return (
          <div>
              <div className="navbar">
                  <div className="navbar__container">
                      <Logo></Logo>
                      <div className="menu__wrapper">
                          <Menu
                            items={this.checkHandlerEmpty(ITEMS)}
                            buildItems={this.buildItems}
                            handlerClickMenuMobile={this.handlerClickMenuMobile}
                            />
                      </div>
                  </div>
              </div>
              <MenuMobile
                items={this.checkHandlerEmpty(ITEMS_MOBILE)}
                buildItems={this.buildItems}
                display={this.state.openMenuMobile}
                />
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
