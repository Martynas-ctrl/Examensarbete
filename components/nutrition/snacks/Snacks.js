import { useQuery } from '@apollo/client';
import NUTRITION_QUERY from '../snacks/SnackQuery';
import AddSnack from './SnacksAdd';
import SnacksInfo from './SnacksInfo';
import {React, useState, useEffect} from 'react'
import { Modal, Button } from 'react-bootstrap';
import { gql, useMutation } from '@apollo/client';
import TOTALCONSUMEDKCALS_QUERY from '../snacks/TotalConsumedKcalQuery';
import { Progress } from 'antd';
// import '../css/meals.css'
//CHILD


const ADD_TOTALCONSUMEDKCALS = gql`
mutation Addtotalconsumedkcals($totalKcal: Int){
  __typename
  createTotalConsumedKcal(data: {
    totalKcal: $totalKcal, 
    }) {
      id
    }
}
`;


function Snacks (props) {
    console.log(props);
    const [snacks, setSnacks] = useState([]);
    const [dinner, setDinner] = useState(false);
    const [createTotalConsumedKcal] = useMutation(ADD_TOTALCONSUMEDKCALS);
    const { loading, error, data } = useQuery(NUTRITION_QUERY);
    console.log(NUTRITION_QUERY);
    console.log(data);
    const getDatas = () => {
      if(loading) 
          return <p>Loading user...</p>
      if(error)
          return <p>Error ...</p>
      if(data) {
          setSnacks(data.snacks)
          console.log(data);
      }
    } 
    
    const propsfromnutrition = props.dailyIntake;
    console.log(propsfromnutrition);
    const totalscoresSnacks = snacks.reduce((a,v) =>  a = a + v.totalCalories , 0 );
    
    const breakfastLunchDinner = propsfromnutrition - totalscoresSnacks;
    const breakfastLunchDinnerSnacks = propsfromnutrition + totalscoresSnacks;

    const dailyIntakeForUser = props.dailyIntakeForUser;
    const showDinner = () => {
  setDinner(true);
if(dinner === true) {
    setDinner(false)
  }
}

let totalKcals = breakfastLunchDinnerSnacks;
   
let addTotalConsumedKcals = () => {
  createTotalConsumedKcal({variables: {totalKcal: totalKcals}})
}
    useEffect(() => {
      getDatas();
      // addTotalConsumedKcals();
    })
    
    const showSnacks = () => {
      setSnacks(true);
    if(snacks === true) {
        setSnacks(false)
      }
    }

const datafromallmeals = props.snackprops;

const allmeals = datafromallmeals + totalscoresSnacks;

//Total nutrition per breakfast
const totalProtein = snacks.reduce((a,v) =>  a = a + v.protein , 0 );
const totalCarbs = snacks.reduce((a,v) =>  a = a + v.carbs , 0 );
const totalFat = snacks.reduce((a,v) =>  a = a + v.fat , 0 );

//Total nutrition per breakfast in percent
const ProteinDailyNeed =  Math.floor(dailyIntakeForUser  * 0.3 / 4);
const CarbsDailyNeed =  Math.floor(dailyIntakeForUser  * 0.4 / 4);
const FatDailyNeed =  Math.floor(dailyIntakeForUser  * 0.3 / 9);
const consumedProteinSnack = Math.floor(totalProtein / ProteinDailyNeed * 100);
const consumedCarbsSnack = Math.floor(totalCarbs / CarbsDailyNeed * 100);
const consumedFatSnack = Math.floor(totalFat / FatDailyNeed * 100);
//skapa en query i vilken man postar consumedProteinSnack med hjälp av useEffect.
const consumedSnackCalories = Math.floor(totalscoresSnacks / dailyIntakeForUser * 100);
console.log(dailyIntakeForUser)
{props.changesWord(allmeals)}
{props.changeProteinSnack(totalProtein)}
{props.changeCarbsSnack(totalCarbs)}
{props.changeFatSnack(totalFat)}

  return (
      <div>
        <div className="container mt-4">
            <div className="row">
                <div className="breakfast">
                  <h3 className='title'>Snacks</h3>  
                </div>
                     <table class="table">
                     <thead>
                      <tr>
                        <th scope="col">Food</th>
                        <th scope="col">Protein</th>
                        <th scope="col">Carbs</th>
                        <th scope="col">Fat</th>
                        <th scope="col">Total Calorie Intake</th>
                        <th scope="col"><AddSnack/></th>
                      </tr>
                    </thead>
                    <tbody>
                        {snacks.map(snack => <SnacksInfo key={snack.id} snack={snack} />)}   
                    </tbody>
                    </table>
                    <div style={{ width: 870 }}>
                      <h6>Daily cosumed calories {totalscoresSnacks} / {dailyIntakeForUser}</h6>
                      <Progress percent={consumedSnackCalories} size="small"  strokeColor="#00BFA6" />
                      <h6>Daily Protein Intake {totalProtein} / {ProteinDailyNeed}</h6>
                      <Progress percent={consumedProteinSnack} size="small"  strokeColor="#00BFA6" />
                      <h6>Daily Carbs Intake {totalCarbs} / {CarbsDailyNeed}</h6>
                      <Progress percent={consumedCarbsSnack} size="small"  strokeColor="#00BFA6" />
                      <h6>Daily Fat Intake {totalFat} / {FatDailyNeed}</h6>
                      <Progress percent={consumedFatSnack} size="small"  strokeColor="#00BFA6" />
                      {/* <Progress percent={100} size="small" /> */}
                    </div> 
                      {/* kör här en if sats som säger om kcals är högre än daglig intag så returnera daily calories left to consume zero */}
                    </div>
                  </div>
                </div>
              )
    }
    
      

export default Snacks;