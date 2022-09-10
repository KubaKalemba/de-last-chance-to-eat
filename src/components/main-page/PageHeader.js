import React from 'react';
import './MainPage.css'
import Hamburger from 'hamburger-react'

function PageHeader(props) {
    return (
        <div className='header'>
                <h1>FOODCRAFT</h1>
                <Hamburger />
        </div>
    );
}

export default PageHeader;

//Hamburger ma wysylac do mainpage info o zmianie kontentu