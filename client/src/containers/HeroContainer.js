import { useEffect } from 'react';
import { useState } from 'react';
import HeroList from "../components/Hero/HeroList"

const HeroContainer = () => {

    const [heroes, setHeroes] = useState([]);
    const URL = 'Http://localhost:8081/heroes'


    const fetchHeroes = () => {
        fetch(URL)
        .then(res => res.json())
        .then(data => setHeroes(data));
      }

      useEffect(() => {
        fetchHeroes()
      }, [])

    return(
        <div>
            <h1 className="HanVHeader">Heroes and Villains</h1>
            <div className="heroes">
                <HeroList heroes={heroes}/>
            </div>
        </div>
    )

}

export default HeroContainer