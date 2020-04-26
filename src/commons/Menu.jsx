import React, { Component } from 'react';
import Item  from './Item.jsx';


import "./Menu.scss";

class Menu extends Component {

    // constructor(props){
    //   super(props)
    // }

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
          <React.Fragment>
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
          </div>
          <div className="menu__container--sm">
            {/* Add button  */}
            <div className="button-hm" onClick={this.props.handlerClickMenuMobile}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </React.Fragment>
        );
    }
}

export default Menu;
