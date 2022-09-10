import React from 'react';
import './MainPage.css'
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";
import Menu from "../menu/Menu";


function MainPage(props) {
    return (
        <div className='main-page'>
            <PageHeader />
            <Menu/>

            <PageFooter />
        </div>
    );
}

export default MainPage;

/*
    tutaj przechowujemy i zmieniamy stan main contentu
 */