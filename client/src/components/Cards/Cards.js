import React, { useState } from 'react'
import { Card } from '../Card/Card';
import './Cards.css'

export const Cards = ({ recipes, setRecipes }) => {

    const [filteredData, setFilteredData] = useState(recipes);

    // const handleRemove = id => {
    //     const newList = recipes.filter(item => item.id !== id)

    //     setRecipes(newList)
    // }

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = recipes.filter((recipe) => {
            return recipe.name.toLowerCase().includes(searchWord.toLowerCase())
        })
        setFilteredData(newFilter)
    }

    return (
        <div>

            <div className='input'>
                <input
                    type='text'
                    placeholder='Search...'
                    onChange={handleFilter}
                />
            </div>

            <div className='cardWrapper'>
                {filteredData.map((recipe) => (
                    <Card recipe={recipe} />
                ))}
            </div>

        </div>

    )
}
