import { React, useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Modal, Button } from 'react-bootstrap'
import NUTRITION_QUERY from '../queries/NutritionQuery';
import ADDDAILYNUTRITION_QUERY from '../queries/AddDailyConsumedNutritionQuery';

const ADD_NUTRITION = gql`
  mutation AddNutrition($foodName: String!,$protein: Int!, $carbs: Int!, $fat: Int!, $totalCalories: Int, $totalProtein: Int){
    __typename
    createNutrition(data: {
      foodName: $foodName, 
      protein: $protein,
      carbs: $carbs,
      fat: $fat,
      totalCalories: $totalCalories,
      totalProtein: $totalProtein,
      }) {
        id
      }
}
`;

function AddNutrition(props) {
  let foodName, protein, carbs, fat;
  let games = props.totalp;
  const [showModal, setShow] = useState(false);
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false);
  const [createNutrition, { data }] = useMutation(ADD_NUTRITION, {
    update(cache, { data: { createNutrition } }) {
      const data = cache.readQuery({ query: NUTRITION_QUERY });
      cache.writeQuery({
        query: NUTRITION_QUERY,
        data: { nutritions: [createNutrition, ...data.nutritions] },
      });
    },
  });


const addBreakfast = (e) => {
  e.preventDefault();
  createNutrition({variables: {foodName: foodName.value, protein: parseInt(protein.value), carbs: parseInt(carbs.value), fat: parseInt(fat.value), totalCalories: parseInt(protein.value * 4) + parseInt(carbs.value * 4) + parseInt(fat.value * 9), totalProtein: games} },{data});
  setShow(false);
}

  return (
    <div>
    <Button variant="primary" onClick={handleShow}>
      + New Nutriton
    </Button>
      <Modal show={showModal} backdrop="static" keyboard={false} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="modal_title">ADD BREAKFAST</Modal.Title>
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
                  <button  id="cancel_button" className="btn btn-primary" onClick={handleClose}>Cancel</button>
                  <button type="submit" className="btn btn-primary" onClick={addBreakfast}>Add Nutrition</button>
              </Modal.Footer>
              </Modal>
          </div>          
  );
};
export default AddNutrition;