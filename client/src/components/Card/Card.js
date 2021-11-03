import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { Ingredients } from '../Ingredients/Ingredients';
import { Instructions } from '../Instructions/Instructions';

import './Card.css'

export const Card = ({ recipe, index, handleConfirmation }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className='card' >

            <Modal show={show} onHide={handleClose}>
                <Modal.Body>
                    <div className='tableContainer'>
                        <table>
                            <thead>
                                <tr>
                                    <td>Name</td>
                                    <td>Serving Size</td>
                                    <td>Prep Time</td>
                                    <td>Cooking Time</td>
                                    <td>Date Published</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{recipe.name}</td>
                                    <td>{recipe.servingSize}</td>
                                    <td>{recipe.prepTime}</td>
                                    <td>{recipe.cookTime}</td>
                                    <td>{recipe.datePublished}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>

            <div className='cardBody'>
                <div className='cardHeader'>
                    <Button variant="primary" size="sm" onClick={handleShow}>
                        View Details
                    </Button>
                </div>
                <h2 className='cardTitle'>{recipe.name}</h2>
                <p className='cardDescription'>{recipe.description}</p>
                <div className='cardDisplay'>
                    <Instructions recipe={recipe} />
                    <Ingredients recipe={recipe} />
                </div>
            </div>
            <br />
            <button
                onClick={() => handleConfirmation(index)}
            >Remove Recipe</button>


        </div>


    )
}
