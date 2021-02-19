import { useEffect } from 'react';
import { useState } from 'react';
import UserContainer from "./containers/UserContainer"
import HeroContainer from "./containers/HeroContainer"

import './App.css';

function App() {
  
  const [users, setUsers] = useState([]);
  const [heroes, setHeroes] = useState([]);

  const fetchUsers = () => {
    console.log("Loading Users...")
    const usersUrl = 'Http://localhost:8081/users'

    fetch(usersUrl)
    .then(res => res.json())
    .then(data => setUsers(data))
  }

  const fetchHeroes = () => {
    console.log("Loading Heroes...")
    const heroesUrl = 'Http://localhost:8081/heroes'

    fetch(heroesUrl)
    .then(res => res.json())
    .then(data => setHeroes(data))
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  useEffect(() => {
    fetchHeroes()
  }, [])

  return (
    <>
  <header>
    <h1>SuperShack</h1>
    </header>
    <div className="User">
      <UserContainer
      users={users}/>
    </div>

    <div className="Hero">
      <HeroContainer
      heroes={heroes}/>
    </div>
 
  </>
  )
}

export default App;
