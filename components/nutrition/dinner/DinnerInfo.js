import React from 'react';
import { useMutation } from '@apollo/client';
import { Button } from 'react-bootstrap';
import UpdateDinner from './DinnerUpdate';
import DELETE_DINNER from './dinnerQueries/DeleteDinnerQuery';

function DinnerInfo(props) {

  const [deleteDinner] = useMutation(DELETE_DINNER);

  const removeProduct = (id) => {
    deleteDinner({variables: {id: id}});
    window.location.reload();
  }

  return (
        <tr>
          <td>{props.dinner.foodName}</td>
          <td>{props.dinner.protein}</td>
          <td>{props.dinner.carbs}</td>
          <td>{props.dinner.fat}</td>
          <td>{props.dinner.totalCalories}</td>
          <td><div id="button_nutrition" class="btn-group">
                <button id="button_nutrition" class="btn bmd-btn-fab bmd-btn-fab-sm dropdown-toggle" type="button" id="ex3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i id="i_Nutrition" class="material-icons">more_vert</i>
                </button>
                <div class="dropdown-menu  dropdown-menu-bottom" aria-labelledby="ex3">
                  <UpdateDinner id={props.dinner.id} />
                  <Button className="btn" onClick={() => removeProduct(props.dinner.id)}><i className="fa fa-trash"></i>Delete</Button>
                </div>
              </div>
          </td>
        </tr>
  );
}
export default DinnerInfo;

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

  {/* <p onClick={() => expoID(props.nutrition.id)}>test</p> */}

//Skicka iden härifrån till edit modal komponenten.
