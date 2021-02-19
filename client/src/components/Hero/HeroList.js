import Hero from "./Hero"

const HeroList = ({heroes}) => {

    const heroNodes = heroes.map((hero) => {

            return(<ol key={hero.id} className="component-item">
                <Hero hero={hero} />
            </ol>
            )
    
        })

    return(
        <ul id="heroList">
            {heroNodes}
        </ul>
)
    
}

export default HeroList