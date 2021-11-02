import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './UpdateInstructions.css'

export const UpdateInstructions = ({ instructions, handleEdit }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>

            <Button variant="primary" onClick={handleShow}>
                Edit Instructions
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <ul>
                        {instructions.map((inst, index) => {
                            return (
                                <li key={index} className='updateInput'>
                                    <input
                                        onChange={(event) => handleEdit(event, index)}
                                        value={inst}
                                    ></input>
                                </li>
                            )
                        })}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}
