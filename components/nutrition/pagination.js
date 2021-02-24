import { useQuery } from '@apollo/client';
import PAGINATION_QUERY from '../queries/paginationQuery';
import NUTRITIONLUNCH_QUERY from './lunch/LunchQuery';
import Nutritioninfo from './NutritionInfo';
import UserInfo from '../user/UserInfo';
import { Modal, Button } from 'react-bootstrap';
import {React, useState, useEffect} from 'react'
import DailyIntake from '../user/DailyIntak';
import AddNutrition from '../nutrition/AddNutrition';
import '../css/meals.css'
import NutritionLunch from './lunch/NutritionLunch';
// import Dinner from './dinner/Dinner';
import Snacks from './snacks/Snacks';
import AddNutritionLunch from './lunch/AddNutritionLunch';

// const test = totalscores;
function Pagination (props) {
 
  console.log(props);
const [nutritions, setNutritions] = useState([]);
const [dailyIntake, setTest] = useState([]);
const [totalData , setTotalData] = useState();
const [showBreakfast, setShowBreakfast] = useState(false);
const [showLunch, setShowLunch] = useState(false);
const [dinner, setDinner] = useState(false);
const [snacks, setSnacks] = useState(false);
const [total, setTotal] = useState([]);
const { loading, error, data } = useQuery(PAGINATION_QUERY, {
  variables: {
    offset: 0,
    limit: 5
  },
});

console.log(data);
const getDatas = () => {
  if(loading) 
      return <p>Loading user...</p>
  if(error)
      return <p>Error ...</p>
  if(data) {
      setNutritions(data.nutritions)
      console.log(data);
  }
} 

const fetchMore = () => ({
  variables: {
    offset: 5,
    limit: 5
  }
})
const totalscores = nutritions.reduce((a,v) =>  a = a + v.totalCalories , 0 );
const dailyIntakeprops = props.nut;
const lunchScore = props.totalscoresLunch;

// const getTotal = () => {
//   setTest(totalfinaly);
// } 
// const dailyIntakeForUser = dailyIntakeprops - totalscores;
const dailyIntakeForUser = dailyIntakeprops;

// useEffect(() => {
//   getDatas();
//   // getTotal();
//   console.log((nutritions.reduce((a,v) =>  a = a + v.totalCalories , 0 )));
// })

const showBreak = () => {
  setShowBreakfast(true);
  if(showBreakfast === true) {
    setShowBreakfast(false)
  }
}

const showLun = () => {
  setShowLunch(true);
if(showLunch === true) {
    setShowLunch(false)
  }
}

// if(showLunch === true) {
//   return (<div>
    
//     <Button onClick={showLun}>Breakfast</Button>
//     <NutritionLunch dailyIntakeForUser={dailyIntakeForUser} breakfastIntake={totalscores} />
//     </div>)

// }else {
  return (
    <div>
      <button onClick={getDatas}>Next</button>
    </div>
  )
}
// }


//ta kalorier som man fått i sig under alla måltider och skicka dem till ny schema och senare därifrån hämta den på en ny komponent och rendera den därifrån
export default Pagination;