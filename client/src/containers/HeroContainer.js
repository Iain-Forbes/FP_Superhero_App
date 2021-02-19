import { useEffect } from 'react';
import { useState } from 'react';
import HeroList from "../components/Hero/HeroList"

const HeroContainer = ({}) => {

    const [heroes, setHeroes] = useState([]);

    const fetchHeroes = () => {
        console.log("Loading Heroes...")
        const heroesUrl = 'Http://localhost:8081/heroes'
    
        fetch(heroesUrl)
        .then(res => res.json())
        .then(data => setHeroes(data))
      }

      useEffect(() => {
        fetchHeroes()
      }, [])

    return(
        <div>
            <h1>Heroes and Villains</h1>
            <div className="heroes">
                <HeroList heroes={heroes}/>
            </div>
        </div>
    )

}

export default HeroContainer