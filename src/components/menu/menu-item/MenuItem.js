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
        <div className={"menu-item"}>
            {props.icon}
            <Link style={linkStyle} to={props.path}>{props.name.toString().toUpperCase()}</Link>
        </div>
    );
}

export default MenuItem;