import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './Ingredients.css'
import { AddIngredient } from '../AddIngredient/AddIngredient';

export const Ingredients = ({ recipe }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let fieldValue = null;

    const [ingredients, setIngredients] = useState(recipe.ingredients)

    const removeIngr = index => {
        console.log(index, 'index of instruction')
        let newArr = [...ingredients]
        let deletedInst = newArr.splice(index, 1)
        console.log(deletedInst)
        setIngredients(newArr)
    }

    const handleGetNewIngr = (event) => {
        event.preventDefault()

        fieldValue = event.target.value;

        console.log(fieldValue)
        
    }

    const handleAddIngredient = (event) => {
        event.preventDefault()

        let newInstArr = [...ingredients].concat(fieldValue)

        setIngredients(newInstArr)
    }


    return (

        <div>

            <Button variant="primary" onClick={handleShow}>
                View Ingredients
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Ingredients</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul className='ingrList'>
                        {ingredients.map((ingr, index) => {
                            return (
                                <li key={index} className='ingrItem'>
                                    {ingr}
                                    <button
                                        className='ingrBTN'
                                        onClick={() => {
                                            removeIngr(index)
                                        }}
                                    >Remove</button>
                                </li>
                            )
                        })}
                    </ul>
                    <AddIngredient handleGetNewIngr={handleGetNewIngr} handleAddIngredient={handleAddIngredient}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="secondary">
                        Add Ingredient
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
