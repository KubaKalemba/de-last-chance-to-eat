import React from 'react';
import './MainPage.css'
import Hamburger from 'hamburger-react'
import {openMenu} from "./MainPage";

function PageHeader(props) {

    return (
        <div className='page-header'>
                <h1>FOODCRAFT</h1>
                <Hamburger hideOutline={true} onToggle={() => {
                    props.handleToggle()
                }} duration={.5} toggled={props.isMenuOpen}/>
        </div>
    );
}

export default PageHeader;

//Hamburger ma wysylac do mainpage info o zmianie kontentu