import React from 'react';
import UpdateUser from './UpdateUser';
import Img from '../Images/undraw_male_avatar_323b.png';
import { Button } from 'react-bootstrap';
import Image from '../Images/undraw_Private_data_re_4eab.png';
// import ImgBread from '../33851693.jpg';
import '../css/user.css';

function UserInfo(props) {

  return (
      <div className="col-sm-4">
          <div className="product_card" >
                <div class="card" style={{width: "210px"}}>
                <img id='maleAvatar' class="card-img-top" src={Img} alt="male_avatar"/>
                <div class="card-body">
                  <h5>{props.userInfos.fullName}</h5>
                  <p class="card-text">Age:  {props.userInfos.age} | Gender: {props.userInfos.gender}</p>
                  <p class="card-text">Height: {props.userInfos.height}cm | Weight: {props.userInfos.weight}kg</p>
                </div>
                <div class="btn-group">
                  <button class="btn dropdown-toggle" type="button" id="buttonMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown
                  </button>
                  <div class="dropdown-menu" aria-labelledby="buttonMenu1">
                    <UpdateUser id={props.userInfos.id} />
                    <div class="dropdown-divider"> </div>
                    <a id='buttonMenu1' class="dropdown-item" href="/info"><i class="fas fa-question-circle"></i>INFO</a>
                    <a id='buttonMenu1' class="dropdown-item" href="/training"><i class="fas fa-dumbbell"></i>TRAINING</a>
                  </div>
                </div>
              </div>
          </div>
            {/* <img src={Image} alt='fitness_img' id='fitness_img' /> */}
      </div>
  );
}

export default UserInfo;

{/* <h5 className="card-title">{props.userInfos.fullName}</h5>
              <h6 class="list-group-item">Age:  {props.userInfos.age}</h6>
              <h6 class="list-group-item">Height: {props.userInfos.height}</h6>
              <h6 class="list-group-item">Weight: {props.userInfos.weight}</h6>
              <h6 class="list-group-item">Gender: {props.userInfos.gender}</h6>
              <h6 class="list-group-item">Total Daily Calorie Intake: {props.userInfos.total} kcal</h6>
              <h6 class="list-group-item">Protein needed per day: {Math.floor(props.userInfos.total * 0.3 / 4)} kcal</h6>
              <h6 class="list-group-item">Carbs needed per day: {Math.floor(props.userInfos.total * 0.4 / 4)} kcal</h6>
              <h6 class="list-group-item">Fat needed per day: {Math.floor(props.userInfos.total * 0.3 / 9)} kcal</h6> */}

              {/* <p onClick={() => expoID(props.nutrition.id)}>test</p> */}