import UserContainer from "./containers/UserContainer"
import HeroContainer from "./containers/HeroContainer"

import './App.css';

function App() {
  
  return (
    <>
  <header>
    <h1>SuperShack</h1>
    </header>

    <div className="Hero">
      <HeroContainer/>
    </div>

    <div className="User">
      <UserContainer/>
    </div>
  </>
  )
}

export default App;
