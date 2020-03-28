import React, { Component } from 'react';
import "./MenuMobile.scss";
import Item  from './Item.jsx';

class MenuMobile extends Component {
  state = {  }
  render() {
    return (

    <div className= {`menu__mobile ${this.props.display ? 'show' : 'hidden'}`}>
       <Item
                  type={'first'} l
                  label={'About us'}
                  position={'right'}
                  handler={this.handlerClick}
                  name={'about-us'}
                  action={'redirect'}
                  customClass = {'item--mobile'}
                  url={'https://www.youtube.com.mx/'}
                />
                <Item
                  type={'first'}
                  label={'Login'}
                  position={'right'}
                  name={'about-us'}
                  action={'redirect'}
                  customClass = {'item--mobile'}
                  url={'https://www.facebook.com.mx/'}
                  handler={this.handlerClick}
                />
                <Item
                  type={'secondary'}
                  label={'Contact us'}
                  position={'right'}
                  name={'about-us'}
                  action={'redirect'}
                  customClass = {'item--mobile'}
                  url={'https://www.google.com.mx/'}
                  handler={this.handlerClick}
                />
    </div> );
  }
}

export default MenuMobile;
