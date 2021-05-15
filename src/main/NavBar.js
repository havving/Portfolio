import React from 'react';
import './NavBar.css';

const NavBar = () => {
    return (
        <ul id="menu">
            <li><a href="#1" className="menu-active show-examples">One</a></li>
            <li><a href="#2" className="show-examples">Two</a></li>
            <li><a href="#3" className="show-examples">Three</a></li>
        </ul>
    );
};

export default NavBar;