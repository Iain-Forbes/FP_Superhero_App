const Hero = ({name, slug, intelligence, strength, speed, durability, combat, power}) => {

    return(
        <div id="heroinfo">
            <h3>Hero Details</h3>
            <p>Name : {name}</p>
            <p>Slug : {slug}</p>
            <p>Stats</p>
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