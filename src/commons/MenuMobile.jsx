import React, { Component } from 'react';
import "./MenuMobile.scss";
import Item  from './Item.jsx';

class MenuMobile extends Component {
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


  buildItems = (items) => {
    if(!!items){
      return items.map((item, index) => (
        <Item
          key={`${index}--${item.name}`}
          type= {item.type}
          label={item.label}
          position={item.position}
          handler={this.isEmpty(item.handler) ? this.handlerClick : item.handler}
          name={item.name}
          action={item.action}
          customClass = {'item--mobile'}
          url={item.url}
        />
      ))
    }
  }

  render() {
    return (

    <div className= {`menu__mobile ${this.props.display ? 'show' : 'hidden'}`}>
       {this.buildItems(this.props.items)}
    </div> );
  }
}

export default MenuMobile;
