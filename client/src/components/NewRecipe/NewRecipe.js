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
                <p>Please Select Date</p>
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
                    name='ingredients'
                    required='required'
                    placeholder='Ingredients'
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
                <input
                    className='formItem formInput'
                    type='text'
                    name='instructions'
                    required='required'
                    placeholder='Instructions'
                    onChange={handleAddFormChange}
                ></input>
                <button
                    type='submit'
                >Add</button>
                <button
                    onClick={() => { setModalOpen(false) }}
                >Close</button>
            </form>
        </div>
    )
}
