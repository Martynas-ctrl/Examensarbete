import React from 'react';
// import UpdateUser from './UpdateUser';

function WorkoutInfo(props) {

  return (
      <div className="col-sm-4">
          <div className="product_card" >
            <div className="card-body">
              <ul class="list-group list-group-flush">
              <li class="list-group-item">Age:  {props.workoutInfo.exerciseName}</li>
              <li class="list-group-item">Height: {props.workoutInfo.set}</li>
              <li class="list-group-item">Weight: {props.workoutInfo.rep}</li>
              {/* <UpdateUser id={props.userInfos.id} /> */}
              </ul>
              {/* <div class="card" style={{width: "18rem"}}>
  <img class="card-img-top" src="..." alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">{props.userInfos.fullName}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{props.userInfos.age}</li>
    <li class="list-group-item">{props.userInfos.height}</li>
    <li class="list-group-item">{props.userInfos.weight}</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div> */}
            </div>
          </div>
      </div>
  );
}

export default WorkoutInfo;