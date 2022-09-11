import React from 'react';
import './MenuItem.css'
import {Link} from "react-router-dom";


const linkStyle = {
    margin: "1rem",
    textDecoration: "none",
    color: 'white',
    display: 'flex'
};

function MenuItem(props) {
    return (

            <Link style={linkStyle} to={props.path} className={'menu-item'} onClick={() => {
                props.hideMenu()
            }}>{props.icon}{props.name}</Link>
    );
}

export default MenuItem;