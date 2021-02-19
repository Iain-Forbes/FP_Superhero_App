const Hero = ({name, slug, intelligence, strength, speed, durability, combat, power, img}) => {


    return(
        <div id="heroinfo">
            <h2>Hero Details</h2>
            
            <p>Name: {name}</p>

            <h2>Stats</h2>

            <p>Inteliigence: {intelligence}</p>
            <p>Strenght: {strength}</p>
            <p>Speed: {speed}</p>
            <p>Durabality: {durability}</p>
            <p>Power : {power}</p>
            <p>Combat :{combat}</p>
            <p>Hero Image :</p>
            <img src={img} alt="boohoo" className="img-responsive"/>
            
        </div>
       
    )
}

export default Hero;