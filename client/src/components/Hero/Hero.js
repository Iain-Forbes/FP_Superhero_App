const Hero = ({name, slug, intelligence, strength, speed, durability, combat, power, heroImg}) => {


    return(
        <div id="heroinfo">
            <h3>Hero Details</h3>
            
            <p>Name : {name}</p>
            <p>Slug : {slug}</p>

            <h2>Stats</h2>

            <p>Inteliigence: {intelligence}</p>
            <p>Strenght: {strength}</p>
            <p>Speed: {speed}</p>
            <p>Durabality: {durability}</p>
            <p>Power : {power}</p>
            <p>Combat :{combat}</p>
            <p>Hero Image :</p>
            <img src={heroImg} alt="boohoo" className="img-responsive"/>
            
        </div>
       
    )
}

export default Hero;