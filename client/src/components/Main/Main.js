import React, { useState } from 'react'
import data from '../../mock.data.json'
import { Cards } from '../Cards/Cards';
import { NewRecipe } from '../NewRecipe/NewRecipe';


export const Main = () => {

    const [recipes, setRecipes] = useState(data)

    const [modalOpen, setModalOpen] = useState(false);

    const [addFormData, setAddFormData] = useState({
        name: '',
        description: '',
        datePublished: '',
        ingredients: '',
        servingSize: '',
        instructions: ''
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
            firstName: addFormData.firstName,
            name: addFormData.name,
            description: addFormData.description,
            datePublished: addFormData.datePublished,
            ingredients: addFormData.ingredients,
            servingSize: addFormData.servingSize,
            instructions: addFormData.instructions
        }

        const newRecipes = [...recipes, newRecipe]

        setRecipes(newRecipes)

        setModalOpen(false)
    }

    return (
        <div>
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

            <Cards recipes={recipes} />
        </div>
    )
}
