import React from 'react';
import "./Menu.css"
import MenuItem from "./menu-item/MenuItem";

function Menu(props) {
    return (
            <div className={"menu"}>
                <MenuItem name={"Ingredients"}></MenuItem>
                <MenuItem name={"Recipes"}></MenuItem>

            </div>
);
}

export default Menu;