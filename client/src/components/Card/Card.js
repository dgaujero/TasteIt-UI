import React, { useState } from 'react'
import { NewRecipe } from '../NewRecipe/NewRecipe';
import './Card.css'

export const Card = ({ recipes }) => {

    const [filteredData, setFilteredData] = useState(recipes);
    const [modalOpen, setModalOpen] = useState(false);
    // const [recipes, setRecipes] = useState(recipes);


    const [addFormData, setAddFormData] = useState({
        name: '',
        description: '',
        datePublished: '',
        ingredients: '',
        servingSize: '',
        instructions: ''
    });

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        const newFilter = recipes.filter((recipe) => {
            return recipe.name.toLowerCase().includes(searchWord.toLowerCase())
        })
        setFilteredData(newFilter)
    }

    const handleAddFormChange = (event) => {
        event.preventDefault()

        const fieldName = event.target.getAttribute('name');

        const fieldValue = event.target.value;

        const newFormData = {...addFormData};

        newFormData[fieldName] = fieldValue;

        setAddFormData(newFormData);
    }

    const handleAddFormSubmit = (event) => {
        event.preventDefault();

        const newRecipe = {
            id: Math.floor(Math.random() * 1000),
            firstName: addFormData.firstName,
            name:  addFormData.name,
            description: addFormData.description,
            datePublished: addFormData.datePublished,
            ingredients: addFormData.ingredients,
            servingSize: addFormData.servingSize,
            instructions: addFormData.instructions
        }

        const newRecipes = [...filteredData, newRecipe]

        setFilteredData(newRecipes)

        setModalOpen(false)
    }

    return (
        <div>
            <button
                className='openModalBtn'
                onClick={() => {
                    setModalOpen(true)
                }}
            >Add New Hire</button>

            {modalOpen && <NewRecipe
                setModalOpen={setModalOpen}
                handleAddFormChange={handleAddFormChange}
                handleAddFormSubmit={handleAddFormSubmit}
            />}

            <div className='input'>
                <input
                    type='text'
                    placeholder='Search...'
                    onChange={handleFilter}
                />
            </div>

            <div className='cardWrapper'>
                {filteredData.map((recipe) => (
                    <div className='card'>
                        <div className='cardBody'>
                            {/* <img alt='#'></img> */}
                            <h2 className='cardTitle'>{recipe.name}</h2>
                            <p className='cardDescription'>{recipe.description}</p>
                        </div>
                        <button className='cardBTN'>View Recipe</button>
                    </div>
                ))}
            </div>

        </div>

    )
}
