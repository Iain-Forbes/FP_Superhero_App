import User from "./User"


const UserList = ({users}) => {

    const userNodes = users.map((user) => { 

        return(<li key={user.id} className="component-item">
            <User user={user} />
        </li>
        )

    })

    return(
            <ul id="userList">
                {userNodes}
            </ul>
    )

}

export default UserList