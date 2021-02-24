import { React, useState } from 'react';
import UPDATE_USER from '../queries/UpdateUserQuery';
import { gql, useMutation } from '@apollo/client';
import { Modal, Button } from 'react-bootstrap';
import Select from 'react-select'
import '../css/modal.css'

function UpdateUser(props) { 

  let fullName, gender, age, height, weight, total;
  const id = props.id;
  console.log(id);
  const [updateUserInfo] = useMutation(UPDATE_USER);
  const [showModal, setShow] = useState(false);
  const [type, setType] = useState('Male')
  const formShow = () => setShow(true);
  const formClose = () => setShow(false);

  const options = [
    {value: 'Male', label: 'Male'},
    {value: 'Female', label: 'Female'}
  ]

  const update = (e) => {
    e.preventDefault();
    updateUserInfo({variables: {id: id, fullName: fullName.value, gender: type, age: parseInt(age.value), height: parseInt(height.value), weight: parseInt(weight.value), total: parseInt(weight.value * 10) + parseInt(height.value * 6.25) - parseInt(age.value * 5) + (type === "Male" ? 5 : -161)}});
  }

  const activeOption = options.find(o => o.value === type)

  return (
      <div key={id}>
        <Button className="btn_edit" onClick={formShow}><i class='far fa-edit'></i>Edit</Button>
        <Modal show={showModal} backdrop="static" keyboard={false} onHide={formClose}>
          <Modal.Header closeButton>
            <Modal.Title className='modalTitle'>UPDATE YOUR INFORMATION</Modal.Title>
          </Modal.Header>
          <Modal.Body className='modalContainer'>
            <form onSubmit={update}>
            <div className="name_Container">
                      {/* <label>Name</label> */}
                      <p>Update your name</p>
                      <input type="text" id="newProjectTitle" placeholder="Tony Stark"  ref={ value => fullName = value} />
                  </div>
                  <div className="name_Container">
                      {/* <label>Age</label>   */}
                      <p>Update your age</p>                   
                      <input type="text" value={age} aria-label="Username" placeholder="e.g. 19" ref={ value => age = value}/>
                  </div>
                  <div className="name_Container">
                      {/* <label>Weight</label>   */}
                      <p>Update your weight</p>                   
                      <input type="text"  aria-label="Recipient's username" placeholder="e.g. 90" ref={ value => weight = value}/>
                  </div>
                  <div className="name_Container">
                      {/* <label>Height</label>   */}
                      <p>Update your height</p>                   
                      <input type="text"  aria-label="Recipient's username" placeholder="e.g. 190" ref={ value => height = value}/>
                  </div> 
                 <div className="name_Container">
                      {/* <label>Update your gender</label> */}
                      <p>Update your gender</p>
                      <Select  className='select'
                      value={activeOption}
                      defaultValue={options[0]}
                      onChange={e => setType(e.value)}
                      options={options}
                      />
                 </div> 
            </form>
          </Modal.Body>
          <Modal.Footer>
            <button id="cancel_button" className="btn btn-primary" onClick={formClose}>Cancel</button>
            <button type="submit" className="btn btn-primary" onClick={update}>Update Game</button>
          </Modal.Footer>
        </Modal>
      </div>  
  )
}

export default UpdateUser;