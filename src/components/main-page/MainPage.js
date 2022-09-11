import React, {useState} from 'react';
import './MainPage.css'
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import Menu from "../menu/Menu";
import {Route, Routes} from "react-router-dom";
import Ingredients from "../ingredients/Ingredients";
import Recipes from "../recipes/Recipes";
import HomePage from "../homepage/HomePage";
import NewIngredient from "../new-ingredient/NewIngredient";

function MainPage(props) {

    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const openMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    return (
        <div className='main-page'>
            <PageHeader handleToggle={openMenu} isMenuOpen={isMenuOpen}/>
            <div className='main-content'>
                {
                    isMenuOpen ? <Menu hideMenu={openMenu}/> :
                    <Routes>
                        <Route path={"/"} element={<HomePage />}/>
                        <Route path="/ingredients" element={<Ingredients/>}/>
                        <Route path="/recipes" element={<Recipes/>}/>
                        <Route path="/new-ingredient" element={<NewIngredient />} />
                    </Routes>
                }
            </div>



            <PageFooter/>
        </div>
    );
}

export default MainPage;

/*
    tutaj przechowujemy i zmieniamy stan main contentu
 */