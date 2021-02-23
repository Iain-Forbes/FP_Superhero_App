import {useState} from "react";

const HeroRandom = ({heroes, hero}) => {

    const [activeHero, setactiveHero] = useState([]);

    const randomHeroes = () => {
         heroes.sort(() => Math.random() - Math.random()).slice(0, setactiveHero)
         console.log(randomHeroes)
    };

    return(
        <HeroRandom heroes={heroes}/>
    )    

}

export default HeroRandom

