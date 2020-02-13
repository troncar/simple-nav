import React from 'react';

const Item = (props) => {
    return (
    <div className={`item--${props.type}`}>{props.label}</div>);
}
 
export default Item;