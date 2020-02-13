import React from 'react';
import logo from '../logo.svg';
import './Logo.scss';


const Logo = (props) => {
    return (  
        <div className="logo__container">
            <img className="logo__img" src={logo} alt="Logo"/>
        </div>);
}
 
export default Logo;