import React  from 'react';
import "./MenuMobile.scss";


const MenuMobile = (props) => {

  return(

    <div className= {`menu__mobile ${props.display ? 'show' : 'hidden'}`}>
       {props.buildItems(props.items)}
    </div>
  )
}

export default MenuMobile;
