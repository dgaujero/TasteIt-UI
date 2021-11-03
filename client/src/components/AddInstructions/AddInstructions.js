// import React, { useState } from 'react';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import './AddInstructions.css'

// export const AddIntructions = (instructions, setInstructions, handleAddInstruction) => {

//     const [newInstructions, setNewInstructions] = useState([]);

//     const [show, setShow] = useState(false);
//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);

//     const handleAddInstruction = (event) => {
//         event.preventDefault()

//         const fieldName = event.target.getAttribute('name');

//         const fieldValue = event.target.value;

//         // const newInstruction = { ...instructions };

//         const newInst = instructions.push(fieldValue)
//         // newFormData[fieldName] = fieldValue;

//         setNewInstructions(newInst);
//     }

//     const handleAddFormSubmit = (event) => {
//         event.preventDefault();

//         const newInstr = {
//             instructions: [addFormData.instructions]
//         }

//         const newRecipes = [...instructions, newInstr]

//         setRecipes(newRecipes)
//         console.log(recipes)
//         setModalOpen(false)
//     }

//     return (
//         <div>

//             <Button variant="primary" onClick={handleShow}>
//                 Add Instructions
//             </Button>

//             <Modal show={show} onHide={handleClose}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Add</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <form onSubmit={() => handleAddFormSubmit}>

//                         <input
//                             name='instructions'
//                             onChange={(event) => handleAddInstruction(event)}
//                             // value=''
//                         ></input>
//                         <button
//                             type='submit'

//                         >Add</button>

//                     </form>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>
//                         Close
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     )
// }
