import UserList from "../User/UserList"
import Hero from "./Hero"

const HeroList = ({heroes}) => {

    const heroNodes = heroes.map((hero) => {

            return(<li key={hero.id} className="component-item">
                <Hero hero={hero} />
            </li>
            )
    
        })

    return(
        <ul id="userList">
            {heroNodes}
        </ul>
)
    
}

export default UserList