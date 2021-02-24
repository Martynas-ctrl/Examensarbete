
import '../css/drawer.css'
import { React, useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
// import USERS_QUERY from '../queries/UserQuery';
import Userinfo from '../user/UserInfo';
import Nutrition from '../nutrition/Nutrition';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import WORKOUT_QUERY from './workoutQuery';
import WorkoutInfo from './workoutInfo';

import '../css/drawer.css'

function Training () {
let exercise, set, rep;
const [workout, setWorkout] = useState([]);
// const [total, setTotal] = useState([]);
const [training, setTraining] = useState(false);
const { loading, error, data } = useQuery(WORKOUT_QUERY);

const getDatas = () => {
  if(loading) 
      return <p>Loading user...</p>
  if(error)
      return <p>Error ...</p>
  if(data) {
      setWorkout(data.workouts)
  }
} 
 
// const getTotal = () => {
//   user.forEach(function (arrayItem) {
//     const x = arrayItem.total;
//     console.log(x);
//     setTotal(x)
//   });
// } 

const showTraining = () => {
  setTraining(true)
} 

useEffect(() => {
  getDatas();
  // getTotal();
  // console.log(total);
  // console.log(user.userInfos);
})
if(training) {
  return <Training  />
}
  return (
    <Router>
        <div className="container mt-4">
          <div className="row">
          {/* <Nutrition nut={user} /> */}
          <div class="bmd-layout-container bmd-drawer-f-l">
  <header class="bmd-layout-header">
    <div class="navbar navbar-light bg-faded">
      <button class="navbar-toggler" type="button" data-toggle="drawer" data-target="#dw-s1">
        <span class="sr-only">Toggle drawer</span>
        <i class="material-icons">menu</i>
      </button>
      <ul class="nav navbar-nav">
        <li class="nav-item">Title</li>
      </ul>
    </div>
  </header>
  <div id="dw-s1" class="bmd-layout-drawer bg-faded">
    <header>
      <a class="navbar-brand">Title</a>
    </header>
    {/* {user.map(userInfos => { 
              return (
              <div>
                <Userinfo key={userInfos.id} userInfos={userInfos} />
                <Nutrition nut={userInfos.total} />
              </div>
              )
              }
            )
} */}
{/* <Button ><a href="/total">Services</a></Button> */}
<Button ><a href="/total">Total</a></Button>
  </div>
  <main class="bmd-layout-content">
    <div class="container">
      <p>Main content</p>
      {workout.map(workoutInfo => { 
              return (
              <div>
                <WorkoutInfo key={workoutInfo.id} workoutInfo={workoutInfo} />
              </div>
              )
              }
            )
}
      <form value="Submit" onSubmit={e =>{
                  e.preventDefault();
                  // createUserInfo({variables: {exercise: exercise.value, set: set.value, rep: parseInt(rep.value) }});
              }}>
                  <div>
                      <label>Name</label>
                      <p>It’s the name of the product</p>
                      <input type="text" id="newProjectTitle" placeholder="Name" ref={ value => exercise = value} />
                  </div>
                  <div >
                      <label>Age</label>  
                      <p>It will contain the price of our product</p>                   
                      <input type="text"  aria-label="Recipient's username" placeholder="Price" ref={ value => set = value}/>
                  </div>
                  <div >
                      <label>Weight</label>  
                      <p>It will contain the price of our product</p>                   
                      <input type="text"  aria-label="Recipient's username" placeholder="Price" ref={ value => rep = value}/>
                  </div>
                  <div >
                    <button type="submit" className="btn btn-primary">Add Product</button>
                    <a href="/total">Services</a>
                  </div>
              </form>
    </div>
  </main>
</div>
          </div>
        </div>
        </Router>
    )
}

export default Training;