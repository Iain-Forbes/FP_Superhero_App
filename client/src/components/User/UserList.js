import User from "./User"


const UserList = ({users}) => {

    const userNodes = users.map((user) => { 

        return(    
        <ol key={user.id} className="component-item">
            <User user={user} />
        </ol>
        )


    })

    return(
            <ul id="userList">
                {userNodes}
            </ul>
        
           
    )

}

export default UserList