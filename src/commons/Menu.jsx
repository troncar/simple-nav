import React, { Component } from 'react';
import Item  from './Item.jsx';

import "./Menu.scss";

class Menu extends Component {
    state = {  }

    handlerClick = (event) => {
        console.log(event.target.getAttribute('name'));
        console.log(event.target.getAttribute('action'));
    }

    render() {
        return (
        <div className="menu menu__container">
            <div className="menu__items--md">
                <Item   type={'first'} l
                        abel={'About us'}
                        position={'right'}
                        handler={this.handlerClick}
                        name={'about-us'}
                        action={'redirect'}
                        url={'https://www.google.com.mx/'}
                />
                <Item   type={'first'}
                        label={'Login'}
                        position={'right'}
                        handler={this.handlerClick}
                />
                <Item
                  type={'secondary'}
                  label={'Contact us'}
                  position={'right'}
                  handler={this.handlerClick}
                />
            </div>
            <div className="menu__items--xs">
              <div className="menu-hm">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
        </div> );
    }
}

export default Menu;
