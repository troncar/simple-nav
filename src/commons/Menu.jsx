import React  from 'react';



import "./Menu.scss";

const Menu = (props) => {

  return (
    <React.Fragment>
      <div className="menu__container--md">
      <div className="menu__items--md">
       {props.buildItems(props.items)}
      </div>
    </div>
    <div className="menu__container--sm">
      <div className="button-hm" onClick={props.handlerClickMenuMobile}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </React.Fragment>
  );
}

export default Menu;
