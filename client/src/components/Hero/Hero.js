const Hero = ({name, slug, intelligence, strength, speed, durability, combat, power, img}) => {


    return(
        <div id="heroinfo">
            
            <h3>{name}</h3>
            <img src={img} alt="boohoo" className="img-responsive"/>

            <h2>Stats</h2>

            <p>Inteliigence: {intelligence}</p>
            <p>Strenght: {strength}</p>
            <p>Speed: {speed}</p>
            <p>Durabality: {durability}</p>
            <p>Power : {power}</p>
            <p>Combat :{combat}</p>
            
            
        </div>
       
    )
}

export default Hero;