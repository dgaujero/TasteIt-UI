import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './AddInstructions.css'

export const AddInstructions = ({ handleAddInstruction, handleGetNewInst}) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>

            <Button variant="primary" onClick={handleShow}>
                Add Instructions
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form onSubmit={handleAddInstruction}>

                        <input
                            name='instructions'
                            onChange={(event) => handleGetNewInst(event)}
                        ></input>
                        <button
                            type='submit'
                        >Add</button>

                    </form>
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
