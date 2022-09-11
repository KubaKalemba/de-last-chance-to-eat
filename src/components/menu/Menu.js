import React from 'react';
import "./Menu.css"
import MenuItem from "./menu-item/MenuItem";

function Menu(props) {
    return (
            <div className={"menu"}>
                <MenuItem name={"home"} path={"/"} hideMenu={props.hideMenu}/>
                <MenuItem name={"ingredients"} path={"/ingredients"} hideMenu={props.hideMenu}/>
                <MenuItem name={"recipes"} path={"/recipes"} hideMenu={props.hideMenu}/>

            </div>
);
}

export default Menu;