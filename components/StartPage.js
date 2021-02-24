import { useQuery } from '@apollo/client';
import { React, useState, useEffect } from 'react'
import { BrowserRouter as Router, Route  } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import Select from 'react-select'
import ADD_USER from './queries/AddUserQuery';
import { gql, useMutation } from '@apollo/client';
import { Link } from 'react-router-dom'
import User from './user/User';
import 'antd/dist/antd.css';
// import '../css/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import '../components/css/total.css'
import { Button } from 'react-bootstrap'

//CHILD

import TOTALCONSUMEDKCALS_QUERY from './nutrition/snacks/TotalConsumedKcalQuery';



function Total (props) {
  const [back, setBack] = useState(false);  // console.log({word})
  let fullName, gender, age, height, weight, total;
  let aim = 500;
  const [createUserInfo, { data }] = useMutation(ADD_USER);
  const [showModal, setShow] = useState(false);
  const [type, setType] = useState('Male');
  const [goal, setGoal] = useState(['Maintain', 'Gain', 'Lose']);
  const [home, setHome] = useState(false);
  const [t, setT] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true)

  const options = [
    {value: 'Male', label: 'Male'},
    {value: 'Female', label: 'Female'}
  ]

  const goalOptions = [
    {value: 'Maintain', label: 'Maintain'},
    {value: 'Gain', label: 'Gain'},
    {value: 'Lose', label: 'Lose'}
  ] 

  const activeOption = options.find(o => o.value === type)
  const activeGoalOption = options.find(o => o.value === goal)

if(goal === 'Gain') {
  aim =  500;
}else if(goal === 'Lose') {
  aim = -500
}else {
  aim = 0;
}


      const backfunc = (e) => {
        e.preventDefault();
        createUserInfo({variables: {fullName: fullName.value, gender: type, age: parseInt(age.value), height: parseInt(height.value), weight: parseInt(weight.value), total: parseInt(weight.value * 10) + parseInt(height.value * 6.25) - parseInt(age.value * 5) + (type === "Male" ? 5 : -161) + aim} },{data})
        // setHome(true);  
      }

         return (
           <div className='containerMain'>
          {/* <img src={WelcomeImg} /> */}
            <div className='title'>
              asds
            </div>    
            <form>
              <div class="form-group">
                <label for="fullName" class="bmd-label-floating">Full Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" ref={ value => fullName = value} />
                {/* <span class="bmd-help">We'll never share your email with anyone else.</span>
                <span class="bmd-help">And this is probably from a second plugin showing in a non-optimal way</span> */}
              </div>
              <div class="form-group">
                <label for="Age" class="bmd-label-floating">Age</label>
                <input type="text" class="form-control" id="exampleInputEmail1" ref={ value => age = value} />
              </div>  
              <div class="form-group">
                <label for="Weight" class="bmd-label-floating">Weight</label>
                <input type="text" class="form-control" id="exampleInputEmail1" ref={ value => weight = value} />
              </div>  
              <div class="form-group">
                <label for="Height" class="bmd-label-floating">Height</label>
                <input type="text" class="form-control" id="exampleInputEmail1" ref={ value => height = value} />
              </div> 
              <div class="form-group">
                <label for="Gender" class="bmd-label-floating">Gender</label>
                <Select  
                value={activeOption}
                defaultValue={options[0]}
                onChange={e => setType(e.value)}
                options={options}
                />
                <Select  
                value={activeGoalOption}
                defaultValue={goalOptions[0]}
                onChange={e => setGoal(e.value)}
                options={goalOptions}
                />
                <Button onClick={backfunc}>Add Product</Button>
              </div>
            </form>
              
          {/* <div className="modal_title">ADD USER FORM</div>
          <div className='modalContainer'>
            <form>
              <div className="form">
                <label for="fullName">Full Name:</label>
                <input type="text" id="newProjectTitle" placeholder="Full name" ref={ value => fullName = value}  />
              </div>
              <div className="form">
                <label for="Age">Age</label>                   
                <input type="text" aria-label="User's username" placeholder="Age" ref={ value => age = value}  />
              </div>
              <div className="form">
                <label for="weight">Weight</label>                   
                <input type="text"  aria-label="User's username" placeholder="Weight" ref={ value => weight = value}  />
              </div>
              <div >
                <label for="Height">Height</label>                   
                <input type="text"  aria-label="User's username" placeholder="Height" ref={ value => height = value} />
              </div>
              <label for="Gender">Gender</label>
              <Select  
              value={activeOption}
              defaultValue={options[0]}
              onChange={e => setType(e.value)}
              options={options}
              />
              <Select  
              value={activeGoalOption}
              defaultValue={goalOptions[0]}
              onChange={e => setGoal(e.value)}
              options={goalOptions}
              />
              <button onClick={backfunc}>Add Product</button>
            </form>
            
          </div> */}
          
          </div>
        ) 
    }

export default Total;