import UserList from "../components/User/UserList"
import { useEffect } from 'react';
import { useState } from 'react';

const UserContainer = () => {

    const [users, setUsers] = useState([]);

    const fetchUsers = () => {
      console.log("Loading Users...")
      const usersUrl = 'Http://localhost:8081/users'
  
      fetch(usersUrl)
      .then(res => res.json())
      .then(data => setUsers(data))
    }
  
  
    useEffect(() => {
      fetchUsers()
    }, [])

    return(
        <>
        <div>
            <h1>Users</h1>
            <div className="users">
                <UserList users={users}/>
            </div>
        </div>
        </>
    )

}

export default UserContainer