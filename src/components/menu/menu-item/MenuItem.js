import React from 'react';
import './MenuItem.css'

function MenuItem(props) {
    return (
        <div className={"menu-items"}>
            <button>{props.name}</button>
        </div>
    );
}

export default MenuItem;