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
           
            <p>Full Name: {hero.fullName}</p>
            <p>Alter Egos : {hero.alterEgo}</p>
            <p>Gender: {hero.gender}</p>
            <p>Race : {hero.race}</p>
            <p>Place of Birth : {hero.placeOfBirth}</p>
            <p>First Appeared: {hero.firstAppearance}</p>
            <p>Alignment : {hero.alignment}</p>
            <p>Occupation : {hero.occupation}</p>
            <p>Group Affilation : {hero.groupAffiliation} </p>
        </div>
        </div>
      </>  
    )
}
export default HeroDetail