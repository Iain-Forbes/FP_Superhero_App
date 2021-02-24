import UserList from "../components/User/UserList"

import { useEffect } from 'react';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UserDetail from "../components/User/UserDetail"
import UserForm from '../components/User/UserForm'
import {deleteUser as delUserFromAPI} from "../helpers/requests"

const UserContainer = ({heroes}) => {

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

    const findUserById = function(id){
        return users.find((user) => {
          return user.id === (id);
        })
      }

    
    const handleDelete = function(id){
        delUserFromAPI(id).then(() => {
            const temp = users.map(u => u);
            const userToDel = temp.map(u => u._id).indexOf(id);
            temp.splice(userToDel, 1);
            setUsers(temp)
            
    })
}

    const createUser = (user) => {
        const newUser = users.map(u => u);
        newUser.push(newUser);
        setUsers(newUser);
    }

    return(
        <>
        
        <Switch>
    
        <Route exact path="/users/:id" render={(props) => 
        {
        const id = props.match.params.id;
        const user = findUserById(id);
        
        return <UserDetail user={user}
        onDelete={handleDelete}
        createUser={createUser}
            />
            }}/>


        <Route exact path="/users" render = {() =>{
            
            return(
            <div>
                <p>All Current Users</p>
                <UserList users={users} />
                <UserForm createUser={createUser} heroes={heroes}/>
            </div>

      
           
            )}} />
        </Switch>
        </>
    )

}

export default UserContainer