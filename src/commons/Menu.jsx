import React, { Component } from 'react';
import Item  from './Item.jsx';

import "./Menu.scss";

class Menu extends Component {
    state = {  }

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

    render() {
        return (
            <div className="menu__container--md">
              <div className="menu__items--md">
                  <Item
                    type={'first'} l
                    label={'About us'}
                    position={'right'}
                    handler={this.handlerClick}
                    name={'about-us'}
                    action={'redirect'}
                    url={'https://www.youtube.com.mx/'}
                  />
                  <Item
                    type={'first'}
                    label={'Login'}
                    position={'right'}
                    name={'about-us'}
                    action={'redirect'}
                    url={'https://www.facebook.com.mx/'}
                    handler={this.handlerClick}
                  />
                  <Item
                    type={'secondary'}
                    label={'Contact us'}
                    position={'right'}
                    name={'about-us'}
                    action={'redirect'}
                    url={'https://www.google.com.mx/'}
                    handler={this.handlerClick}
                  />
              </div>
            </div>);
    }
}

export default Menu;
