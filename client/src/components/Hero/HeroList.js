import Hero from "./Hero"

const HeroDispaly = ({heroes}) => {

    const heroList = heroes.map((hero, index) => {

        
        return(
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
            key={index}
            />
        )
        
    })

    return(
        <div>
            <h2>Hero List</h2>
            <ul id="heroList">
                {heroList}
            </ul>
        </div>
    )
    
}

export default HeroDispaly