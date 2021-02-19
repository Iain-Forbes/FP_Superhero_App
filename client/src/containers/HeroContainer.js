import HeroList from "../components/Hero/HeroList"

const HeroContainer = ({heroes}) => {

    return(
        <div>
            <h1>Heroes and Villains</h1>
            <div className="heroes">
                <HeroList heroes={heroes}/>
            </div>
        </div>
    )

}

export default HeroContainer