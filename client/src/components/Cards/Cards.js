import React, { useState } from 'react'
import { Card } from '../Card/Card';
import './Cards.css'

export const Cards = ({ recipes }) => {

    const [filteredData, setFilteredData] = useState(recipes);

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = recipes.filter((recipe) => {
            return recipe.name.toLowerCase().includes(searchWord.toLowerCase())
        })
        setFilteredData(newFilter)
    }

    const handleConfirmation = (index) => {
        // eslint-disable-next-line no-restricted-globals
        let result = confirm('Are you sure you want to delete forever?');
        console.log(result)
        if(result){
            removeRecipe(index)
        } 
    }

    const removeRecipe = index => {
        console.log(index, 'key of recipe')
        let newArr = [...filteredData]
        let deletedRecipe = newArr.splice(index, 1)
        console.log(deletedRecipe)
        setFilteredData(newArr)
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
                {filteredData.map((recipe, index) => (
                    <Card recipe={recipe} index={index} removeRecipe={removeRecipe} key={recipe.id} handleConfirmation={handleConfirmation}/>
                ))}
            </div>

        </div>

    )
}
