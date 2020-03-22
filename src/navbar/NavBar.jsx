import React, { Component } from 'react';
import styled from 'styled-components';
import Item from '../commons/Item.jsx';
import Logo from '../commons/Logo.jsx';
import Menu from '../commons/Menu.jsx';

import "./NavBar.scss";

const BarMd = styled.div `
/* Basic Styles
 position can be a prop (?)
*/
  width: 100%;
  position: fixed;
  padding: .5rem;
  height: 5rem;
  background-color: ${props => props.backgroundColor || props.theme.baseColor};
`;

const InnerBarMd = styled.div `
  width: 100%;
  display: flex;
`;

class NavBar extends Component {


    render() {
        // const items = [{
        //   'about us' : {
        //     'label' : 'About us',
        //     'type': 'first',
        //     'position':'right',
        //     'handler':
        //   }
        // }]
        return (
        <React.Fragment>
         {/* We have two menus one for large devices and desktop navbar-md and other one for mobile devices navbar-sm */}
         <BarMd>
           <InnerBarMd>
            <Logo
                width={'4rem'}
                height={'4rem'}
                position={'left'}
                url={'https://picsum.photos/50'}
              />
              <Menu items={}></Menu>
           </InnerBarMd>
         </BarMd>
          {/* <div className="navbar-md">
            <div className="navbar-md__container">
              <Logo/>
              <div className="navbar-md__menu">
                <div className="menu__wrapper">
                  <Menu handlerClick={this.handlerClick}></Menu>
                </div>
              </div>
            </div>
          </div> */}
          {/* <div className="navbar-sm">

          </div> */}
        </React.Fragment>
        );
    }
}

export default NavBar;
