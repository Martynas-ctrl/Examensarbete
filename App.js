import './App.css';
import User from './components/user/User';
import Training from './components/Training/Training';
import Startpage from './components/StartPage';
import Info from './components/nutrition/Info';


import { React, useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Route , Link, Redirect } from 'react-router-dom';

function App() {
const [word , setWord] = useState();  
console.log(word)

  return (
    <Router>
      <div>
        
       {/* <User changeWord={word => setWord(word)}/> */}
      {/* <Link to={'/training'} className="nav-link"> Home </Link>
      <Link to={'/total'} className="nav-link"> ss </Link> */}
      {/* <h1>test: {word}</h1> */}
      {/* <Route exact path='/' render={ () => <Total word={word} /> } /> */}
      {/* <Link to='/total'>go to totalz</Link> */}
      <main>
      {/* <Sidebar /> */}
        <Route path='/' exact render={ () => <Startpage word={word} /> } />
        <Route path='/Info' exact render={ () => <Info  /> } />
        <Route path='/home' render={ () => <User changeWord={word => setWord(word)}/> }/> 
        <Route path='/training' render={ () => <Training /> }/> 
        </main>
        </div>  
        {/* <Route path='/total' render={ () => <Total word={word}  /> } /> */}
    </Router>
  );
}

export default App;