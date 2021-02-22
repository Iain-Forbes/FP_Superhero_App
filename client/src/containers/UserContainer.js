import UserList from "../components/User/UserList"
import { useEffect } from 'react';
import { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import UserDetail from "../components/User/UserDetail"
import UserForm from '../components/User/UserForm'

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

    const findUserById = function(id){
        return users.find((user) => {
          return user.id === (id);
        })
      }

    
    const handleDelete = function(id){
            const temp = users.map(user => user);
            const userToDel = temp.map(user => user._id).indexOf(id);
            temp.splice(userToDel, 1);
            setUsers(temp);
          }

    const addUser = (user) =>{
        const temp = users.map(user => user);
        temp.push(user)
        setUsers(temp)
    }

    return(
        <>
        <UserForm addUser={addUser}/>
        <Switch>
    
        <Route exact path="/users/:id" render={(props) => 
        {
        const id = props.match.params.id;
        const user = findUserById(id);
        
        return <UserDetail user={user}
        onDelete={handleDelete}
        addUser={addUser}
            />
            }}/>

            
        <Route render = {() =>{
            return <UserList users={users} />
        }} />
        </Switch>
        </>
    )

}

export default UserContainer