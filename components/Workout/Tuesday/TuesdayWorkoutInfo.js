import React from 'react';
import { useMutation } from '@apollo/client';
import { Button } from 'react-bootstrap';
import DELETE_TUESDAY from '../Tuesday/TuesdayDeleteQuery';
import UpdateWorkout from '../Tuesday/TuesdayUpdateWorkout';

function TuesdayWorkoutInfo(props) {
  const OneRM = props.workoutInfo.weight + (props.workoutInfo.weight * props.workoutInfo.reps * 0.033);
  const [deleteExercise] = useMutation(DELETE_TUESDAY);
  console.log(props);
  const removeExercise = (id) => {
    deleteExercise({variables: {id: id}});
    window.location.reload();
  }

  return (
      <table class="table">
        <tbody>
          <tr>
            <td id="td" style={{width: "200px"}}><p>{props.workoutInfo.exercise}</p></td>
            <td id="td" style={{width: "100px"}}><p>{props.workoutInfo.sets}</p></td>
            <td id="td" style={{width: "100px"}}><p>{props.workoutInfo.reps}</p></td>
            <td id="td" style={{width: "100px"}}><p>{props.workoutInfo.weight}kg</p></td>
            <td id="td" style={{width: "100px"}}><p>{Math.round(OneRM)}kg(1RM)</p></td>
            <td id="td" style={{width: "100px"}}><UpdateWorkout id={props.workoutInfo.id} /></td>
            <td id="td" style={{width: "100px"}}><Button onClick={() => removeExercise(props.workoutInfo.id)}><i className="fa fa-trash"></i>Delete</Button></td>
          </tr>
        </tbody>
      </table>
    );
}

export default TuesdayWorkoutInfo;