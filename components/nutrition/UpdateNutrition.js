import { React, useState } from 'react';
import UPDATE_NUTRITION from '../queries/UpdateNutritionQuery';
import { useMutation } from '@apollo/client';
import { Modal, Button } from 'react-bootstrap';
import NUTRITION_QUERY from '../queries/NutritionQuery';


function UpdateNutrition(props) { 

  let foodName, protein, carbs, fat;
  const id = props.id;
  console.log(id);
  const [updateNutrition] = useMutation(UPDATE_NUTRITION);
  // , {
  //   update(cache, { data: { updateNutrition } }) {
  //     const data = cache.readQuery({ query: NUTRITION_QUERY });
  //     cache.writeQuery({
  //       query: NUTRITION_QUERY,
  //       data: { nutritions: [updateNutrition, ...data.nutritions] },
  //     });
  //   },
  // });
  const [showModal, setShow] = useState(false);
  const formShow = () => setShow(true);
  const formClose = () => setShow(false);

  const updateN = (e) => {
    e.preventDefault();
    updateNutrition({ variables: { id: id, foodName: foodName.value, protein: parseInt(protein.value), carbs: parseInt(carbs.value), fat: parseInt(fat.value), totalCalories: parseInt(protein.value * 4) + parseInt(carbs.value * 4) + parseInt(fat.value * 9) }});
    window.location.reload();
  }

  return (
      <div key={id}>
        <Button className="btn_edit" onClick={formShow}><i class='far fa-edit'></i>Edit</Button>
        <Modal show={showModal} backdrop="static" keyboard={false} onHide={formClose}>
          <Modal.Header closeButton>
            <Modal.Title>UPDATE GAME FORM</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modalContainer'>
            <form onSubmit={updateN}>
            <div className="name_Container">
                      <label>Name</label>
                      <p>It’s the name of the product</p>
                      <input type="text" id="newProjectTitle" placeholder="Name" ref={ value => foodName = value} />
                  </div>
                  <div className="name_Container">
                      <label>Age</label>  
                      <p>It will contain the price of our product</p>                   
                      <input type="text"  aria-label="Recipient's username" placeholder="Price" ref={ value => protein = value}/>
                  </div>
                  <div className="name_Container">
                      <label>Weight</label>  
                      <p>It will contain the price of our product</p>                   
                      <input type="text"  aria-label="Recipient's username" placeholder="Price" ref={ value => carbs = value}/>
                  </div>
                  <div className="name_Container">
                      <label>Height</label>  
                      <p>It will contain the price of our product</p>                   
                      <input type="text"  aria-label="Recipient's username" placeholder="Price" ref={ value => fat = value}/>
                  </div>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button id="cancel_button" className="btn btn-primary" onClick={formClose}>Cancel</button>
            <button type="submit" className="btn btn-primary" onClick={updateN}>Update Nutrition</button>
          </Modal.Footer>
        </Modal>
      </div>  
  )
}

export default UpdateNutrition;