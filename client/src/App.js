import UserContainer from "./containers/UserContainer"
import HeroContainer from "./containers/HeroContainer"
import NavBar from "./components/NavBar/NavBar"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';

function App() {
  
  return (
    <>
  <header>
    <h1>SuperShack</h1>
    <NavBar/>
    </header>

    <Router>
        <Switch>
          <Route exact path="/allheroes" component={HeroContainer} />
          <Route exact path="/" component={UserContainer} />
        </Switch>
      </Router>
  </>
  )
}

export default App;
