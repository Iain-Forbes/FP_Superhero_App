import UserList from "../components/User/UserList"

const UserContainer = ({users}) => {

    return(
        <div>
            <h1>Users</h1>
            <div className="users">
                <UserList users={users}/>
            </div>
        </div>
    )

}

export default UserContainer