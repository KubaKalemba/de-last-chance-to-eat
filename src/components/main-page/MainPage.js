import React from 'react';
import './MainPage.css'
import PageHeader from "./PageHeader";
import PageFooter from "./PageFooter";

function MainPage(props) {
    return (
        <div className='main-page'>
            <PageHeader />
            <div className='main-content'>
                <button>new ingredient</button>
                <button>new recipe</button>
            </div>
            <PageFooter />
        </div>
    );
}

export default MainPage;

/*
    tutaj przechowujemy i zmieniamy stan main contentu
 */