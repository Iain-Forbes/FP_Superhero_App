const Hero = ({hero}) => {


    return(
        <div id="heroinfo">
            
            <h2>{hero.name}</h2>
            <img src={hero.heroImg} alt="Not Found" className="img-responsive"/>

            <h3>Stats</h3>

            <p>Intelligence: {hero.intelligence}</p>
            <p>Strenght: {hero.strength}</p>
            <p>Speed: {hero.speed}</p>
            <p>Durabality: {hero.durability}</p>
            <p>Power : {hero.power}</p>
            <p>Combat :{hero.combat}</p>

            
            
        </div>
       
    )
}

export default Hero;