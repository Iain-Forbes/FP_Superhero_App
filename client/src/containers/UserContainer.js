import UserList from "../components/User/UserList"
import { useEffect } from 'react';
import { useState } from 'react';
import Request from '../helpers/requests.js'

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

    const handleDelete = function(id){
        const request = new Request();
        const url = "/users/" + id
        request.delete(url)
        .then(() => window.location = "/users")
      }



    return(
        <>
        <div>
            <h1>Users</h1>
            <div className="users">
                <UserList users={users}
                    onDelete={handleDelete}/>
            </div>
        </div>
        </>
    )

}

export default UserContainer