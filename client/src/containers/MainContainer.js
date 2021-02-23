import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar.js';
import UserContainer from './UserContainer';
import HeroContainer from './HeroContainer';
import HomeContainer from './HomeContainer';



const MainContainer = () => {

return (
 

    <Router>
    <>
    <NavBar/>
    <Switch>
    <Route path="/home" component={HomeContainer}/>
      <Route path="/users" component={UserContainer} />
      <Route path="/heroes" component={HeroContainer} />
    </Switch>
    </>
    </Router>
  
  )
}

export default MainContainer;