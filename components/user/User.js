import { React, useState, useEffect } from 'react'
import { useQuery } from '@apollo/client';
import USERS_QUERY from '../queries/UserQuery';
import Userinfo from './UserInfo';
import Nutrition from '../nutrition/Nutrition';
import AddUser from './AddUser';
import AddNutrition from '../nutrition/AddNutrition';
import NutritionLunch from '../nutrition/lunch/NutritionLunch';
import { BrowserRouter as Router } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'
import '../css/drawer.css'
import Training from '../Training/Training';
import Total from '../StartPage';
import 'react-circular-progressbar/dist/styles.css';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { Progress, Tooltip } from 'antd';
import { PieChart } from 'react-minimal-pie-chart';
import Chart from "react-google-charts";
import 'antd/dist/antd.css';
import '../css/main.css';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import Img from '../Images/undraw_male_avatar_323b.png';
import LogoImg from '../Images/apple.svg';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

function User (props) {
console.log(props);
const [user, setUser] = useState([]);
const [total, setTotal] = useState([]);
const [proteins, setProtein] = useState([]);
const [carbs, setCarbs] = useState([]);
const [fats, setFat] = useState([]);
const [totalData , setTotalData] = useState()
const [tWord, settWord] = useState();
const [carbsBreakfast, setCarbsBreakfast] = useState();
const [fatBreakfast, setFatBreakfast] = useState();
const [dailyNutritionProtein, setDailyNutritionProtein] = useState();
const [dailyNutritionCarbs, setDailyNutritionCarbs] = useState();
const [dailyNutritionFat, setDailyNutritionFat] = useState();
const [training, setTraining] = useState(false);
const { loading, error, data } = useQuery(USERS_QUERY);

const getDatas = () => {
  if(loading) 
      return <p>Loading user...</p>
  if(error)
      return <p>Error ...</p>
  if(data) {
      setUser(data.userInfos) 
  }
} 

const getTotal = () => {
  user.forEach(function (arrayItem) {
    const x = arrayItem.total;
    const proteinNeeded = Math.floor(x * 0.3 / 4);
    const carbsNeeded = Math.floor(x * 0.4 / 4);
    const fatNeeded = Math.floor(x * 0.3 / 9);
    setTotal(x)
    setProtein(proteinNeeded);
    setCarbs(carbsNeeded);
    setFat(fatNeeded);
  });
} 


useEffect(() => {
  getDatas();
  getTotal();
})

const showTraining = () => {
  setTraining(true)
} 

const percentage = Math.floor(totalData * 100 / total);

// Total Nutrition Daily Intake
const ProteinDailyNeed =  Math.floor(total  * 0.3 / 4);
const CarbsDailyNeed =  Math.floor(total  * 0.4 / 4);
const FatDailyNeed =  Math.floor(total  * 0.3 / 9);

const percentageProtein = Math.floor(dailyNutritionProtein * 100 / ProteinDailyNeed);
const percentageCarbs = Math.floor(dailyNutritionCarbs * 100 / CarbsDailyNeed);
const percentageFat = Math.floor(dailyNutritionFat * 100 / FatDailyNeed);

// Total Nutrition Breakfast
const consumedProteinBreakfast = tWord;
const consumedCarbsBreakfast = carbsBreakfast;
const consumedFatBreakfast = fatBreakfast;
const totalConsumedNutritionBreakfast = consumedProteinBreakfast + consumedCarbsBreakfast + consumedFatBreakfast;
console.log(user)
const goToTraining = () => {
  setTraining(true);
}

if(training) {
  return <Redirect to='/training' />
}

return (
  <Router>
    <div class="bmd-layout-container bmd-drawer-f-l">
          <header id='containerUser' class="bmd-layout-header">
            <div class="navbar navbar-light bg-faded">
              <button class="navbar-toggler" type="button" data-toggle="drawer" data-target="#dw-s1">
                <span class="sr-only">Toggle drawer</span>
                <i class="material-icons">menu</i>
              </button>
              <ul id='containerLogo' class="nav navbar-nav">
                <li class="nav-item"><img className='logo' src={LogoImg}></img></li>
              </ul>
            </div>
          </header>
          <div id="dw-s1" class="bmd-layout-drawer bg-faded">
            {user.map(userInfos => { 
                      return (
                      <div>
                        <Userinfo key={userInfos.id} userInfos={userInfos} />
                      </div>
                    )
                }
              )
            }
            </div>
            <main class="bmd-layout-content">
              <div class="container">
                <p></p>
              <div className='containerProgress'>
              <Chart
                width={'500px'}
                height={'300px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ['Times', 'Hours per Day'],
                  ['Protein', proteins],
                  ['Carbs', carbs],
                  ['Fat', fats],
                ]}
                options={{
                  title: 'My Daily Nutrition',
                }}
                rootProps={{ 'data-testid': '1' }}
              />
              <div className='containerCircle'>
                <div className='innerContainer'>
                <h6>Daily Consumed Calories: {totalData} / {total} </h6>
                  {percentage <= 100 ? (
                    <Progress type="circle"  percent={percentage} width={150}/>
                  ): null
                  }
                  
                  {percentage > 100 ? (
                    <Progress type="circle"  percent={percentage} status="exception" width={150} />
                  ): null}
                </div>

                <div className='innerContainer'>
                <h6>Daily Consumed Protein: {dailyNutritionProtein} / {ProteinDailyNeed} </h6>
                {percentageProtein <= 100 ? (
                    <Progress type="circle"  percent={percentageProtein} width={150}/>
                  ): null
                  }
                  
                  {percentageProtein > 100 ? (
                    <Progress type="circle"  percent={percentageProtein} status="exception" width={150} />
                  ): null}
                </div>

                <div className='innerContainer'>
                <h6>Daily Consumed Carbs: {dailyNutritionCarbs} / {CarbsDailyNeed} </h6>
                {percentageCarbs <= 100 ? (
                    <Progress type="circle"  percent={percentageCarbs}  width={150}/>
                  ): null
                  }
                  
                  {percentageCarbs > 100 ? (
                    <Progress type="circle"  percent={percentageCarbs} status="exception" width={150} />
                  ): null}
                  </div>

                <div className='innerContainer'>
                <h6>Daily Consumed <br></br>Fat: {dailyNutritionFat} / {FatDailyNeed} </h6>
                {percentageFat > 100 ? (
                    <Progress type="circle"  percent={percentageFat} status="exception" width={150} />
                  ): null}
              
                {percentageFat <= 100 ? (
                    <Progress type="circle"  percent={percentageFat} width={150}/>
                  ): null
                  }
                </div>
              </div>
              </div>
                {props.changeWord(totalData)}
                <Nutrition nut ={total} changeTotalData={totalData => setTotalData(totalData)} 
                changeTword={tWord => settWord(tWord)} 
                changeCarbsBreakfast={carbsbreakfast => setCarbsBreakfast(carbsbreakfast)} 
                changeFatBreakfast={fatbreakfast => setFatBreakfast(fatbreakfast)}
                changeDailyNutritionProtein={dailyNutritionProtein => setDailyNutritionProtein(dailyNutritionProtein)}
                changeDailyNutritionCarbs={dailyNutritionCarbs => setDailyNutritionCarbs(dailyNutritionCarbs)}
                changeDailyNutritionFat={dailyNutritionFat => setDailyNutritionFat(dailyNutritionFat)} />
              </div>
            </main>
          </div>
      </Router>
    )
}

export default User;