import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const Instructions = ({recipe }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const [instructions, setInstructions] = useState(recipe.instructions)

    const removeInst = index => {
        console.log(index, 'index of instruction')
        let newArr = [...instructions]
        let deletedInst = newArr.splice(index, 1)
        console.log(deletedInst)
        setInstructions(newArr)
    }

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
                    <ul>
                        {instructions.map((inst, index) => {
                            return(
                                    <li key={index}>
                                        {inst}
                                        <button
                                            onClick={() => {
                                                removeInst(index)
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
                        Add Instruction
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}
