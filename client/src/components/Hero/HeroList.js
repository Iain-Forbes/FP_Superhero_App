import Hero from "./Hero"

const HeroList = ({heroes}) => {

    const heroNodes = heroes.map((hero) => {

            return(<ol key={hero.id} className="component-item">
                <Hero hero={hero}/>
                
            </ol>
            )
    
        })

    return(
        <ul id="component-list">
             <div className="heroList">
            {heroNodes}
            </div>
        </ul>
)
    
}

export default HeroList