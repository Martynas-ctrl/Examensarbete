import { React } from 'react';
import { useMutation } from '@apollo/client';
import MONDAYWORKOUT_QUERY from './MondayWorkoutQuery';
import MONDAYADDWORKOUT_QUERY from './MondayAddWorkoutQuery';
import '../CSS/week.css';

function MondayAddWorkout() {
  let exercise, sets, reps, weight;
  const [createMondayWorkout] = useMutation(MONDAYADDWORKOUT_QUERY, {
    update(cache, { data: { createMondayWorkout } }) {
      const data = cache.readQuery({ query: MONDAYWORKOUT_QUERY });
      cache.writeQuery({
        query: MONDAYWORKOUT_QUERY,
        data: { mondayWorkouts: [createMondayWorkout, ...data.mondayWorkouts] },
      });
    }, 
  });

  const addWorkout = (e) => {
    e.preventDefault();
    createMondayWorkout({
      variables: {
        exercise: exercise.value, 
        reps: parseInt(reps.value),
        sets: parseInt(sets.value),
        weight: parseInt(weight.value),
      }});
  }

  return (
      <div>
        <form className="containerWorkout" >
          <div style={{width: "185px"}}  class="form-group" id="container">
            <label id="label">Exercise Name</label>
            <input class="form-control" type="text" placeholder="e.g. Bench Press" ref={ value => exercise = value} />
          </div>
          <div style={{width: "95px"}} class="form-group" id="container">
            <label id="label">Sets</label>                     
            <input class="form-control" type="text"  placeholder="e.g. 4" ref={ value => sets = value}/>
          </div>
          <div style={{width: "85px"}} class="form-group" id="container">
            <label id="label">Reps</label>                  
            <input class="form-control" type="text" aria-label="Athletes's reps" placeholder="e.g. 8" ref={ value => reps = value}/>
          </div>
          <div style={{width: "90px"}} class="form-group" id="container">
            <label id="label">Weight</label>                  
            <input class="form-control" type="text" aria-label="Athletes's weight" placeholder="e.g. 90" ref={ value => weight = value}/>
          </div>
          <span style={{width: "100px"}} class="form-group bmd-form-group">
            <button class="btn btn-primary" onClick={addWorkout}><i class="fas fa-plus-circle"></i> Add Exercise</button>
          </span>
        </form>
      </div>          
    );
};

export default MondayAddWorkout;