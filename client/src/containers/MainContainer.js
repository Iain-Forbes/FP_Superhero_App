import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar.js';
import UserContainer from './UserContainer';
import HeroContainer from './HeroContainer';
import HomeContainer from './HomeContainer';
import { useEffect } from 'react';
import { useState } from 'react';


const MainContainer = () => {

    const [newHeroes, setnewHeroes] = useState([]);
    const URL = 'Http://localhost:8081/heroes'

    const getHeroes = () =>{
        fetch(URL)
        .then(res => res.json())
        .then(heroData => setnewHeroes(heroData))
    }
    useEffect(() =>{
        getHeroes()
        console.log("Fetching New Heros")
    }, [])
    
return (
 

    <Router>
    <>
    <NavBar/>
    <Switch>
    <Route path="/home" component={HomeContainer} />
      <Route path="/users" component={() => <UserContainer heroes={newHeroes}/>} />
      <Route path="/heroes" component={() => <HeroContainer heroes={newHeroes}/>} />
    </Switch>
    </>
    </Router>
  
  )
}

export default MainContainer;