import React, { Component } from 'react';
import Item from '../commons/Item.jsx';
import Logo from '../commons/Logo.jsx';

import "./NavBar.scss";

class NavBar extends Component {

    state = {  }

    handlerClick = (event) => {
        console.log(event.target.getAttribute('name'));
        console.log(event.target.getAttribute('action'));
    }

    render() { 
        return (  
            <div className="navbar">
                <div className="navbar__container">
                    <Logo></Logo>
                    <div className="item__container">
                        <Item   type={'first'}
                                label={'About us'}
                                position={'right'}
                                handler={this.handlerClick}
                                name={'about-us'}
                                action={'redirect'}
                                url={'https://www.google.com.mx/'}
                        ></Item>
                        <Item   type={'first'}
                                label={'Login'}
                                position={'right'}
                                handler={this.handlerClick}
                        ></Item>
                        <Item   type={'secondary'}
                                label={'Contact us'}
                                position={'right'}
                                handler={this.handlerClick}
                        ></Item>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default NavBar;