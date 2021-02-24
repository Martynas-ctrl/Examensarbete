import { React, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import UPDATE_NUTRITION from '../dinner/dinnerQueries/DinnerUpdateQuery';

function DinnerUpdate(props) { 
  let foodName, protein, carbs, fat;
  const id = props.id;
  
  const [updateNutrition] = useMutation(UPDATE_NUTRITION);
  const [showModal, setShow] = useState(false);
  const formShow = () => setShow(true);
  const formClose = () => setShow(false);

  const updateDinner = (e) => {
    e.preventDefault();
    updateNutrition({
      variables: { 
        id: id, 
        foodName: foodName.value, 
        protein: parseInt(protein.value), 
        carbs: parseInt(carbs.value), 
        fat: parseInt(fat.value), 
        totalCalories: parseInt(protein.value * 4) + parseInt(carbs.value * 4) + parseInt(fat.value * 9), 
      }});
    window.location.reload();
  }

  return (
      <div key={id}>
        <Button className="btn_edit" onClick={formShow}><i class='far fa-edit'></i>Edit</Button>
        <Modal show={showModal} backdrop="static" keyboard={false} onHide={formClose}>
          <Modal.Header closeButton>
            <Modal.Title>UPDATE DINNER FORM</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modalContainer'>
            <form onSubmit={updateDinner}>
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
                  <input type="text"  aria-label="Dinners's fat" placeholder="Fat" ref={ value => fat = value}/>
              </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button id="cancel_button" className="btn btn-primary" onClick={formClose}>Cancel</button>
            <button type="submit" className="btn btn-primary" onClick={updateDinner}>Update Dinner</button>
          </Modal.Footer>
        </Modal>
      </div>  
  )
}

export default DinnerUpdate;