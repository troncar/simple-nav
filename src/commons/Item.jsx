import React from 'react';
import './Item.scss';

const Item = (props) => {
    return (
    <div className={`item item--${props.type} item--${props.position}`} action={props.action} name={props.name} url={props.url} onClick={props.handler}>{props.label}</div>);
}
 
export default Item;