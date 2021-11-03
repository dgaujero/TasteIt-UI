import React, { useState } from 'react'
import data from '../../mock.data.json'
import { Cards } from '../Cards/Cards';
import { NewRecipe } from '../NewRecipe/NewRecipe';
import './Main.css'

export const Main = () => {

    const [recipes, setRecipes] = useState(data)

    const [modalOpen, setModalOpen] = useState(false);

    const [addFormData, setAddFormData] = useState({
        name: '',
        description: '',
        datePublished: '',
        cookTime: '',
        servingSize: '',
        prepTime: '',
        instructions: [
            "Boil water"
        ],
        ingredients:[
            "chicken"
        ]
    });

    const handleAddFormChange = (event) => {
        event.preventDefault()

        const fieldName = event.target.getAttribute('name');

        const fieldValue = event.target.value;

        const newFormData = { ...addFormData };

        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newRecipe = {
            id: Math.floor(Math.random() * 1000),
            name: addFormData.name,
            description: addFormData.description,
            datePublished: addFormData.datePublished,
            servingSize: addFormData.servingSize,
            prepTime: addFormData.prepTime,
            cookTime: addFormData.cookTime,
            instructions: [addFormData.instructions],
            ingredients: [addFormData.ingredients],
        }

        const newRecipes = [...recipes, newRecipe]

        setRecipes(newRecipes)
        console.log(recipes)
        setModalOpen(false)
    }

    return (
        <div>
            <div className='main'>
                <button
                    className='cardBTN'
                    onClick={() => {
                        setModalOpen(true)
                    }}
                >Add New Recipe</button>

                {modalOpen && <NewRecipe
                    setModalOpen={setModalOpen}
                    handleAddFormChange={handleAddFormChange}
                    handleAddFormSubmit={handleAddFormSubmit}
                />}

            </div>
            <Cards recipes={recipes} />
        </div>
    )
}
