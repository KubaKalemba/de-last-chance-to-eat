import React from 'react';
import { gql, useQuery } from '@apollo/client';
import './Ingredients.css'
import {Link} from "react-router-dom";

function Ingredients(props) {

    const GET_INGREDIENTS = gql`
        query GetIngredients{
            ingredients {
                name
            }
        }
    `;

    const { loading, error, data } = useQuery(GET_INGREDIENTS)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;

    const items = data.ingredients.map((i) => {
        return (
            <div className='ingredient' key={i.id} value={i.name}>
                {i.name}
            </div>
        )
    })


    return (
        <div className='ingredients-component'>
            <div className='ingredients-header'>
                <input type='text' className='new-ing-input' placeholder={'search...'}/>
                <Link
                    to={'/new-ingredient'}
                    className='new-ing-link'
                >
                    +
                </Link>
            </div>
            <div className='ingredients-header'>
                <h1>INGREDIENTS</h1>
            </div>
            <div className='ingredients-container'>
                {items}
            </div>
        </div>
    );
}

export default Ingredients;