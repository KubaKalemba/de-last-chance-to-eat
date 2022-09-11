import React from 'react';
import { gql, useQuery } from '@apollo/client';
import './Ingredients.css'

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



    return (
        <select className='ingredients'>
            {data.ingredients.map((i) => (
                <option key={i.id} value={i.name}>
                    {i.name}
                </option>
            ))}
        </select>
    );
}

export default Ingredients;