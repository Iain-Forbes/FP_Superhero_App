import Hero from "./Hero"

const HeroList = ({heroes}) => {

    const heroList = heroes.map((hero, index) => {

        console.log(typeof hero.heroImg)
        return(
            <ul key={index}> 
            <Hero
            name={hero.name}
            slug={hero.slug}
            intelligence={hero.intelligence}
            strength={hero.strength}
            speed={hero.speed}
            durability={hero.durability}
            power={hero.power}
            combat={hero.combat}
            img={hero.heroImg}
            />
            </ul>
        )
        
    })

    return(
        <div>
            <ul id="heroList">
                {heroList}
            </ul>
        </div>
    )
    
}

export default HeroList