import React, {useState} from 'react';
import './MainPage.css'
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import Menu from "../menu/Menu";
import {Route, Routes} from "react-router-dom";
import Ingredients from "../ingredients/Ingredients";

function MainPage(props) {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='main-page'>
            <PageHeader handleToggle={openMenu} />
            <Routes>
                <Route path={"/"} element={<Menu/>}/>
                <Route path="/ingredients" element={<Ingredients/>}/>
                <Route path="/recipes"/>
            </Routes>
            <div className='main-content'>
                { isMenuOpen && <Menu /> }
            </div>



            <PageFooter/>
        </div>
    );
}

export default MainPage;

/*
    tutaj przechowujemy i zmieniamy stan main contentu
 */