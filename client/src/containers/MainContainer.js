import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../components/NavBar/NavBar.js';
import UserContainer from './UserContainer';
import HeroContainer from './HeroContainer';



const MainContainer = () => {

return (
 

    <Router>
    <>
    <NavBar/>
    <Switch>
      <Route path="/users" component={UserContainer} />
      <Route path="/heroes" component={HeroContainer} />
    </Switch>
    </>
    </Router>
  
  )
}

export default MainContainer;