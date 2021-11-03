import React from 'react'
import './NewRecipe.css'

export const NewRecipe = ({ setModalOpen, handleAddFormChange, handleAddFormSubmit }) => {

    return (
        <div>
            <form onSubmit={handleAddFormSubmit} className='form'>

                <input
                    className='formItem formInput'
                    type='text'
                    name='name'
                    required='required'
                    placeholder='Name'
                    onChange={handleAddFormChange}
                ></input>
                <input
                    className='formItem formInput'
                    type='text'
                    name='description'
                    required='required'
                    placeholder='Description'
                    onChange={handleAddFormChange}
                ></input>
                <input
                    className='formInput'
                    type="date"
                    required='required'
                    name="datePublished"
                    placeholder="MM/DD/YYYY"
                    onChange={handleAddFormChange}
                ></input>
                <input
                    className='formItem formInput'
                    type='text'
                    name='prepTime'
                    required='required'
                    placeholder='Prep Time'
                    onChange={handleAddFormChange}
                ></input>
                <input
                    className='formItem formInput'
                    type='text'
                    name='cookTime'
                    required='required'
                    placeholder='Cooking Time'
                    onChange={handleAddFormChange}
                ></input>
                <input
                    className='formItem formInput'
                    type='text'
                    name='servingSize'
                    required='required'
                    placeholder='Serving Size'
                    onChange={handleAddFormChange}
                ></input>
                <button
                    className='cardBTN'
                    type='submit'
                >Add</button>
                <button
                    className='cardBTN'
                    onClick={() => { setModalOpen(false) }}
                >Close</button>
            </form>
        </div>
    )
}
