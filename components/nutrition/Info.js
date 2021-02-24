import React from "react";
import { MDBCard, MDBCardTitle, MDBBtn, MDBCardGroup, MDBCardImage, MDBCardText, MDBCardBody } from "mdbreact";
import Img from '../Images/undraw_Private_data_re_4eab.png'
import '../css/user.css';
import ImageEgg from '../Images/2egg.jpg';
import ImgBread from '../Images/bread3.jpg';
import ImgFish from '../Images/fish3.jpg';
const Info = () => {

  return (
   
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
      <a class="navbar-brand">Where to ?</a>
      {/* <Button onClick={showTraining}></Button>
      <Link to="/training"></Link> */}
      <a id='buttonMenu1' class="dropdown-item" href="/home"><i class="fas fa-home"></i>HOME</a>
      <a id='buttonMenu1' class="dropdown-item" href="/training"><i class="fas fa-dumbbell"></i>TRAINING</a>
    </header>
    </div>
    <main class="bmd-layout-content">
      <div class="container">
      <h5>Nutrition Facts</h5>
    <MDBCardGroup>
      <MDBCard id="mdbCard">
        <MDBCardImage id="mdbimg"src={ImageEgg} alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Protein</MDBCardTitle>
          <MDBCardText>
            Protein is essential for growth and on-going repair, nitrogen balance, enzymes that catalyse innumerable chemical reactions, cell signalling and signal transaction.
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard id="mdbCard">
        <MDBCardImage src={ImgBread} alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Carbs</MDBCardTitle>
          <MDBCardText>
            Carb is not essential but it is the bodies preferred energy source, especially during stress and exercise. When glycogen levels get low in the body, cortisol levels rise.
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>

      <MDBCard id="mdbCard">
        <MDBCardImage src={ImgFish} alt="MDBCard image cap" top hover
          overlay="white-slight" />
        <MDBCardBody>
          <MDBCardTitle tag="h5">Fat</MDBCardTitle>
          <MDBCardText>
            Fats is needed for hormone production, cholesterol and cell membrane formation, protect organs, supply vitamins (A,D,E,K) and gives the main energy source for the body at rest.
          </MDBCardText>
          <MDBBtn color="primary" size="md">
            read more
          </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCardGroup>
    </div>        
    </main>
</div>
  );
}

export default Info;