import User from "./User"


const UserList = ({users}) => {

    const userNodes = users.map((user) => { 

        return(
<>      
        <ol key={user.id} className="component-item">
            <User user={user} />
        </ol>
        <ul>
            {user.heroes.map((userHero)=>
            <li className ="Userherolist">
                {userHero.name}
                <img src={userHero.heroImg} width="100" height="100"/>
            </li>
            )}
        </ul>
        </>

        
        )


    })

    return(
            <ul id="userList">
                {userNodes}
            </ul>
           
    )

}

export default UserList