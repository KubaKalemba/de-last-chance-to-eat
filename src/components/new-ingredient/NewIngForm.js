import React from 'react';
import './NewIngForm.css'

function createJSON() {

}

export default function NewIngForm() {

    const items = [
        'name',
        'protein',
        'fat',
        'carbohydrates',
        'calories',
        'gowna'
    ]

    const inputs = items.map(item => {
        return (
            <div className='input-container'>
                <input type='text' placeholder={item} className='input'/>
            </div>
        )
    })

    return (
        <div className='form'>
            {inputs}
        </div>
    );
}

