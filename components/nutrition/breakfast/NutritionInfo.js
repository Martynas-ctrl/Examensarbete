import React from 'react';
import { Button } from 'react-bootstrap';
import { useMutation } from '@apollo/client';
import UpdateNutrition from './UpdateNutrition';
import DELETE_BREAKFAST from '../../queries/Delete_breakfast_query';
import '../breakfast/CssBreakfast/table.css';

function Nutritioninfo(props) {

  const [deleteNutrition, { data }] = useMutation(DELETE_BREAKFAST);

  const removeBreakfast = (id) => {
    deleteNutrition({variables: {id: id}},{data});
    window.location.reload();
  }

  return (
      <tr className='scroll'>
        <td>{props.nutrition.foodName}</td>
        <td>{props.nutrition.protein}</td>
        <td>{props.nutrition.carbs}</td>
        <td>{props.nutrition.fat}</td>
        <td>{props.nutrition.totalCalories}</td>
        <td>
          <div id="button_nutrition" class="btn-group">
            <button id="button_nutrition" class="btn bmd-btn-fab bmd-btn-fab-sm dropdown-toggle" type="button" id="ex3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i id="i_Nutrition" class="material-icons">more_vert</i>
            </button>
            <div class="dropdown-menu  dropdown-menu-bottom" aria-labelledby="ex3">
              <UpdateNutrition id={props.nutrition.id} />
              <Button className="btn" onClick={() => removeBreakfast(props.nutrition.id)}><i className="fa fa-trash"></i>Delete</Button>
            </div>
          </div>
        </td>
      </tr>
    );
}

export default Nutritioninfo;