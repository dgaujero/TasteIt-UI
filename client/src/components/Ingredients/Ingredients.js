import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const Ingredients = ({ recipe }) => {

    const [show, setShow] = useState(false);

    const [ingredients, setIngredients] = useState(recipe.ingredients)

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const removeIngr = index => {
        console.log(index, 'index of instruction')
        let newArr = [...ingredients]
        let deletedInst = newArr.splice(index, 1)
        console.log(deletedInst)
        setIngredients(newArr)
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
                    <ul>
                        {ingredients.map((ingr, index) => {
                            return (
                                <li key={index}>
                                    {ingr}
                                    <button
                                        onClick={() => {
                                            removeIngr(index)
                                        }}
                                    >Remove</button>
                                </li>
                            )
                        })}
                    </ul>
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
