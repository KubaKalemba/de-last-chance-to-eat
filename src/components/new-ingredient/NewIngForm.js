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
        'duken przelewaj dolary'
    ]

    const sendData = () => {
        for (let input of inputs) {
            console.log(input.innerHTML)
        }
    }

    const inputs = items.map(item => {
        return (
            <div className='input-container'>
                <input type='text' placeholder={item} className='input'/>
            </div>
        )
    })

    return (
        <div className='form'>
            <div className='inputs'>
                {inputs}
            </div>
            <div className='button-container'>
            <button className='new-ing-form-button' onClick={sendData} />
            </div>
        </div>
    );
}

