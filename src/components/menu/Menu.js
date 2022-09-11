import React from 'react';
import "./Menu.css"
import MenuItem from "./menu-item/MenuItem";

function Menu(props) {
    return (
            <div className={"menu"}>
                <MenuItem name={"home"} path={"/"}/>
                <MenuItem name={"ingredients"} path={"/ingredients"}/>
                <MenuItem name={"recipes"} path={"/recipes"}/>

            </div>
);
}

export default Menu;