import React from 'react';
import "./Menu.css"
import MenuItem from "./menu-item/MenuItem";
import {HiOutlineHome} from "react-icons/hi"
import {GiFruitBowl} from "react-icons/gi"
import {BsBook} from "react-icons/bs"

function Menu(props) {
    return (
            <div className={"menu"}>
                <MenuItem name={"home"} path={"/"} icon=<HiOutlineHome size={75}/>/>
                <MenuItem name={"ingredients"} path={"/ingredients"} icon={<GiFruitBowl size={75}/>}/>
                <MenuItem name={"recipes"} path={"/recipes"} icon={<BsBook size={75}/>}/>

            </div>
);
}

export default Menu;