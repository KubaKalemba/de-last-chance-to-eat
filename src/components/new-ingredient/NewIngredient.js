import React from 'react'
import './NewIngredient.css'
import NewIngForm from "./NewIngForm";

export default function NewIngredient() {

    const fetch = () => {


    }

    return (
        <div className='container'>
            <div className='header'>
                NEW INGREDIENT
            </div>
            <NewIngForm />
            <div className='footer'>
                <button
                    className='go-to-recipe-button'
                    onClick={fetch}
                />
            </div>
        </div>
    )
}