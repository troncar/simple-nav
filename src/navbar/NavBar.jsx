import React, { Component } from 'react';
import Item from '../commons/Item.jsx';
import Logo from '../commons/Logo.jsx';

import "./NavBar.scss";

class NavBar extends Component {
    state = {  }
    render() { 
        return (  
            <div className="navbar">
                <div className="navbar__container">
                    <Logo></Logo>
                    <Item type={'first'}
                        label={'About us'}
                    ></Item>
                </div>
            </div>
        );
    }
}
 
export default NavBar;