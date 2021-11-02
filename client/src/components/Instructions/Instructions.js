import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const Instructions = ({recipe}) => {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div>

            <Button variant="primary" onClick={handleShow}>
                View Instructions
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Instructions</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {recipe.instructions.map((inst) => {
                        return(
                            <ul>
                                <li>{inst}</li>
                                <button>Edit</button>
                                <button
                                >Remove</button>
                            </ul>
                        )
                    })}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="secondary">
                        Add Instruction
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
