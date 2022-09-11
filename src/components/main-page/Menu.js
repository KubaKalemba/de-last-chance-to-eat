import React from 'react';
import {Route, Routes} from "react-router-dom";
import Ingredients from "../ingredients/Ingredients";

function Menu(props) {
    return (
        <div>
            <Routes>
                <Route path={"/"} element={<Menu/>}/>
                <Route path="/ingredients" element={<Ingredients/>}/>
                <Route path="/recipes"/>
            </Routes>
        </div>
    );
}

export default Menu;