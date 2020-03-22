import React, { Component } from 'react';
import Logo from '../commons/Logo.jsx';
import Menu from '../commons/Menu.jsx';

import "./NavBar.scss";


class NavBar extends Component {

    state = {  }

    handlerClick = (event) => {

    }

    render() {
        return (
            <div className="navbar">
                <div className="navbar__container">
                    <Logo></Logo>
                    <div className="menu__wrapper">
                        <Menu handlerClick={this.handlerClick}></Menu>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;
