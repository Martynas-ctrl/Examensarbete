import React, { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Modal, Button } from 'react-bootstrap'
import NUTRITION_QUERY from './SnackQuery';

const ADD_NUTRITION = gql`
  mutation AddSnacks($foodName: String!, $protein: Int!, $carbs: Int!, $fat: Int!, $totalCalories: Int){
    __typename
    createSnack(data: {
      foodName: $foodName, 
      protein: $protein,
      carbs: $carbs,
      fat: $fat,
      totalCalories: $totalCalories,
      }) {
        id
      }
}
`;

function SnacksAdd() {
  let foodName, protein, carbs, fat;
  const [createSnack] = useMutation(ADD_NUTRITION, {
    update(cache, { data: { createSnack } }) {
      const data = cache.readQuery({ query: NUTRITION_QUERY });
      cache.writeQuery({
        query: NUTRITION_QUERY,
        data: { snacks: [createSnack, ...data.snacks] },
      });
    },
  });

  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  const addSnack = (e) => {
    e.preventDefault();
    createSnack({variables: 
    {foodName: foodName.value, 
    protein: parseInt(protein.value), 
    carbs: parseInt(carbs.value), 
    fat: parseInt(fat.value), 
    totalCalories: parseInt(protein.value * 4) + parseInt(carbs.value * 4) + parseInt(fat.value * 9)} });
    setShow(false);
  }

  return (
    <div>
    <Button variant="primary" onClick={handleShow}>
      + New Nutriton
    </Button>
      <Modal show={showModal} backdrop="static" keyboard={false} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="modal_title">ADD USER FORM</Modal.Title>
      </Modal.Header>
      <Modal.Body className='modalContainer'>
              <form>
                  <div className="name_Container">
                      <label>Food Name</label>
                      <p>It’s the name of the product</p>
                      <input type="text" id="newProjectTitle" placeholder="Name" ref={ value => foodName = value} />
                  </div>
                  <div className="name_Container">
                      <label>Protein</label>  
                      <p>It will contain the price of our product</p>                   
                      <input type="text"  aria-label="Recipient's username" placeholder="Price" ref={ value => protein = value}/>
                  </div>
                  <div className="name_Container">
                      <label>Carbs</label>  
                      <p>It will contain the price of our product</p>                   
                      <input type="text"  aria-label="Recipient's username" placeholder="Price" ref={ value => carbs = value}/>
                  </div>
                  <div className="name_Container">
                      <label>Fat</label>  
                      <p>It will contain the price of our product</p>                   
                      <input type="text"  aria-label="Recipient's username" placeholder="Price" ref={ value => fat = value}/>
                  </div>
              </form>
              </Modal.Body>
              <Modal.Footer>
                <button id="cancel_button" className="btn btn-primary" onClick={handleClose}>Cancel</button>
                <button type="submit" className="btn btn-primary" onClick={addSnack}>Add Nutrition</button>
              </Modal.Footer>
              </Modal>
          </div>          
  );
};
export default SnacksAdd;