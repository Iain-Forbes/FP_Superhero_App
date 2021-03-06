import User from "./User"


const UserList = ({users}) => {


    const userNodes = users.map((user) => { 

        return(    
        <ol key={user.id} className="component-item">
            <div className="component">
            <User user={user}/>
            </div>
        </ol>
        )


    })

    return(
            <ul id="component-list">
                <div className="userList"> 
                {userNodes}
                </div>
            </ul>
        
           
    )

}

export default UserList