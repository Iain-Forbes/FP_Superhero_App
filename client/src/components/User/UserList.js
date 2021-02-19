import User from "./User"

const UserDispaly = ({users}) => {

    const userList = users.map((user, index) => {

        return(
            <User
                name={user.name}
                heroes={user.heroes}
                key={index}
            />
        )

    })

    return(
        <div>
            <h2>User List</h2>
            <ul id="userList">
                {userList}
            </ul>
        </div>
    )

}

export default UserDispaly