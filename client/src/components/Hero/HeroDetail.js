import Hero from "./Hero"

const HeroDetail = ({hero}) => {
    if (!hero){
        return <p>404: Hero not Here.</p>
    }

    return(
        <>
        <div className="heroComponent">
            <Hero hero={hero}/>  
            <div className="bio">
                <h1>Hero Bio</h1>
           
                <p><b>Full Name</b>: {hero.fullName}</p>
                <p><b>Alter Egos</b> : {hero.alterEgo}</p>
                <p><b>Gender </b>: {hero.gender}</p>
                <p><b>Race </b> : {hero.race}</p>
                <p><b>Place of Birth </b> : {hero.placeOfBirth}</p>
                <p><b>First Appeared </b>: {hero.firstAppearance}</p>
                <p><b>Alignment </b> : {hero.alignment}</p>
                    <p><b>Occupation </b> : {hero.occupation}</p>
                <p><b>Group Affilation</b> : {hero.groupAffiliation} </p>
            </div>
        </div>
      </>  
    )
}
export default HeroDetail