import { React, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Modal, Button } from 'react-bootstrap'
import NUTRITION_QUERY from '../dinner/dinnerQueries/DinnerQuery';

const ADD_NUTRITION = gql`
  mutation AddDinner($foodName: String!, $protein: Int!, $carbs: Int!, $fat: Int!, $totalCalories: Int){
    __typename
    createDinner(data: {
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

function DinnerAdd() {
  let foodName, protein, carbs, fat;
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  const [createDinner, { data }] = useMutation(ADD_NUTRITION, {
    update(cache, { data: { createDinner } }) {
      const data = cache.readQuery({ query: NUTRITION_QUERY });
      cache.writeQuery({
        query: NUTRITION_QUERY,
        data: { dinners: [createDinner, ...data.dinners] },
      });
    },
  });

  const addDinner = (e) => {
    e.preventDefault();
    createDinner({
      variables: {
        foodName: foodName.value, 
        protein: parseInt(protein.value), 
        carbs: parseInt(carbs.value), 
        fat: parseInt(fat.value), 
        totalCalories: parseInt(protein.value * 4) + parseInt(carbs.value * 4) + parseInt(fat.value * 9)} },
        {data});   
    setShow(false);
  }

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>+ New Nutriton</Button>
      <Modal show={showModal} backdrop="static" keyboard={false} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal_title">ADD DINNER FORM</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modalContainer">
          <form>
            <div className="name_Container">
              <label>Food Name</label>
              <p>It will contain the name of the food</p>
              <input type="text" placeholder="Name" ref={ value => foodName = value} />
            </div>
            <div className="name_Container">
              <label>Protein</label>  
              <p>It will contain the protein intake of your food</p>                   
              <input type="text" aria-label="Dinners's protein" placeholder="Protein" ref={ value => protein = value}/>
            </div>
            <div className="name_Container">
              <label>Carbs</label>  
              <p>It will contain the carbs intake of your food</p>                   
              <input type="text"  aria-label="Dinners's carbs" placeholder="Carbs" ref={ value => carbs = value}/>
            </div>
            <div className="name_Container">
              <label>Fat</label>  
              <p>It will contain the fat intake of your food</p>                   
              <input type="text" aria-label="Dinners's fat" placeholder="Fat" ref={ value => fat = value}/>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <button id="cancel_button" className="btn btn-primary" onClick={handleClose}>Cancel</button>
          <button type="submit" className="btn btn-primary" onClick={addDinner}>Add Dinner</button>
        </Modal.Footer>
      </Modal>
    </div>          
  );
};

export default DinnerAdd;