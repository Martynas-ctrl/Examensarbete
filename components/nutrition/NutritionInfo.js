import React from 'react';
import UpdateNutrition from './UpdateNutrition';
import DailyIntake from '../user/DailyIntak';
import DELETE_BREAKFAST from '../queries/Delete_breakfast_query';
import { useMutation } from '@apollo/client';
import { Modal, Button } from 'react-bootstrap';
import NUTRITION_QUERY from '../queries/NutritionQuery';
import { useState, useEffect} from 'react'
import '../css/table.css';

function Nutritioninfo(props) {
  const [id, setId] = useState();
// let total = props.nutritions.reduce((a,v) =>  a = a + v.totalCalories , 0 );
const [deleteNutrition, { data }] = useMutation(DELETE_BREAKFAST, {
  update(cache, { data: { deleteNutrition } }) {
    const data = cache.readQuery({ query: NUTRITION_QUERY });
    
    cache.writeQuery({
      query: NUTRITION_QUERY,
      data: { nutritions: [deleteNutrition, ...data.nutritions.filter(nutrition => nutrition.id !== props.nutrition.id)] },
    });
  },
});

const removeProduct = (id) => {
  deleteNutrition({variables: {id: id}},{data});
  window.location.reload();
}
console.log(id)
const expoID = (id) => {
  setId(id);
}

useEffect(() => {
  expoID();
})


  
  return (
        <tr className='scroll'>
          <td>{props.nutrition.foodName}</td>
          <td>{props.nutrition.protein}</td>
          <td>{props.nutrition.carbs}</td>
          <td>{props.nutrition.fat}</td>
          <td>{props.nutrition.totalCalories}</td>
          {/* <td>{props.nutrition.totalProtein}</td> */}
          <td>
          <div id="button_nutrition" class="btn-group">
            <button id="button_nutrition" class="btn bmd-btn-fab bmd-btn-fab-sm dropdown-toggle" type="button" id="ex3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i id="i_Nutrition" class="material-icons">more_vert</i>
            </button>
            <div class="dropdown-menu  dropdown-menu-bottom" aria-labelledby="ex3">
              <UpdateNutrition id={props.nutrition.id} />
              <Button className="btn" onClick={() => removeProduct(props.nutrition.id)}><i className="fa fa-trash"></i>Delete</Button>
              {/* <p onClick={() => expoID(props.nutrition.id)}>test</p> */}
            </div>
          </div>
        </td>
        </tr>
  );
}
export default Nutritioninfo;

{/* <div className="col-sm-4">
<div className="product_card" >
  <div className="card-body">
    <h5 className="card-title">Food: {props.nutrition.foodName}</h5>
    <p className="card-title">Protein:  {props.nutrition.protein}</p>
    <p className="card-title">Carbs: {props.nutrition.carbs}</p>
    <p className="card-title">Fat: {props.nutrition.fat}</p>
    <p className="card-title">Total Calorie Intake: {props.nutrition.totalCalories}</p>
    <p>{total}</p>
    <p className="card-title">Total: {total}</p>
    <UpdateNutrition id={props.nutrition.id} />
    <DailyIntake totalz={props.sc} />
  </div>
</div>
</div>  */}


//Skicka iden härifrån till edit modal komponenten.