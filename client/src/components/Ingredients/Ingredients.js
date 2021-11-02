import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const Ingredients = ({recipe}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                    {recipe.ingredients.map((ingr) => {
                        return(
                            <ul>
                                <li>{ingr}</li>
                                <button>Edit</button>
                                <button>Remove</button>
                            </ul>
                        )
                    })}
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
