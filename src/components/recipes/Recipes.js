import React from 'react';
import './Recipes.css'
import {gql, useQuery} from "@apollo/client";
import {Link} from "react-router-dom";

function Recipes(props) {

    const GET_INGREDIENTS = gql`
        query GetRecipes{
            recipes {
                name
            }
        }
    `;

    const { loading, error, data } = useQuery(GET_INGREDIENTS)
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;


    return (
        <div className='recipes'>
            {
                data.recipes.map((i) => (
                    <div key={i.id} className='recipe'>
                        {i.name}
                    </div>
                ))
            }
            <div className='recipes-footer'>
                <Link
                    to={'/new-ingredient'}
                    className='new-ingredient-link'
                    >
                    NEW RECIPE
                </Link>
            </div>
        </div>
    );
}

export default Recipes;