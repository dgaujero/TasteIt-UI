import React from 'react'
import { Ingredients } from '../Ingredients/Ingredients';
import { Instructions } from '../Instructions/Instructions';

import './Card.css'

export const Card = ({ recipe, key}) => {

    return (

        <div className='card' key={key}>

            <div className='cardBody'>
                <div className='cardHeader'>
                    <h2 className='cardTitle'>{recipe.name}</h2>
                    <button
                        // onClick={handleRemove(key)}
                        className='cardBTN'
                    >X</button>
                </div>
                <p className='cardDescription'>{recipe.description}</p>
                <div className='cardDisplay'>
                    <Instructions recipe={recipe}/>
                    <Ingredients recipe={recipe}/>
                </div>
            </div>


        </div>


    )
}
