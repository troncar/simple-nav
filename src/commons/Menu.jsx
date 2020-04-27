import React, { Component } from 'react';
import Item  from './Item.jsx';


import "./Menu.scss";

class Menu extends Component {

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
            url={item.url}
          />
        ))
      }
    }


    render() {
        return (
          <React.Fragment>
            <div className="menu__container--md">
            <div className="menu__items--md">
             {this.buildItems(this.props.items)}
            </div>
          </div>
          <div className="menu__container--sm">
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
