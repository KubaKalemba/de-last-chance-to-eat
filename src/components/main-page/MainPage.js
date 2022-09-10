import React from 'react';
import './MainPage.css'
import PageHeader from "./PageHeader";

function MainPage(props) {
    return (
        <div className='main-page'>
            <PageHeader />
            <div className='buttons-container'>
                <button>new ingredient</button>
                <button>new recipe</button>
            </div>
        </div>
    );
}

export default MainPage;