import React from 'react';
import "./Menu.css"
import MenuItem from "./menu-item/MenuItem";
import {GiFruitBowl} from "react-icons/gi";
import {BsBook} from "react-icons/bs";
import {HiOutlineHome} from "react-icons/hi";

function Menu(props) {
    return (
            <div className={"menu"}>
                <MenuItem
                    name={"home"}
                    path={"/"}
                    icon=<HiOutlineHome size={75}/>
                    hideMenu={props.hideMenu}

                />
                <MenuItem
                    name={"ingredients"}
                    path={"/ingredients"}
                    icon={<GiFruitBowl size={75}/>}
                    hideMenu={props.hideMenu}
                />
                <MenuItem
                    name={"recipes"}
                    path={"/recipes"}
                    icon={<BsBook size={75}/>}
                    hideMenu={props.hideMenu}
                />

            </div>
);
}

export default Menu;