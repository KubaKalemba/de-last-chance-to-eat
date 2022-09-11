import React from 'react';
import {Route, Routes} from "react-router-dom";
import Ingredients from "../ingredients/Ingredients";
import {HiOutlineHome} from "react-icons/hi";
import MainPage from "./MainPage";

function Menu(props) {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<MainPage />}/>
                <Route path="/ingredients" element={<Ingredients/>}/>
                <Route path="/recipes"/>
            </Routes>
        </div>
    );
}

export default Menu;