import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { UpdateInstructions } from '../UpdateInstructions/UpdateInstructions';

export const Instructions = ({ recipe }) => {

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

    const handleEdit = (event, index) => {
        event.preventDefault()

        const input = event.target.value;

        const newArr = [...instructions]

        newArr[index] = input;

        setInstructions(newArr)

        console.log(input)

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

                    <UpdateInstructions instructions={instructions} handleEdit={handleEdit}/>

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
