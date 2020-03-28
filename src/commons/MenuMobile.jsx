import React, { Component } from 'react';
import "./MenuMobile.scss";
// import Item  from './Item.jsx';

class MenuMobile extends Component {
  state = {  }
  render() {
    return (

    <div className= {`menu__mobile ${this.props.display ? 'show' : 'hidden'}`}>

    </div> );
  }
}

export default MenuMobile;
