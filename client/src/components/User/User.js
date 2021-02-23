import {Link} from 'react-router-dom';

const User = ({user, userHeroes}) => {

    const url = "/users/" + user.id;
        
    return(
        <>
            <Link to = {url} className="name">
            <h2>{user.userName}</h2>
            </Link>   
            <p>{userHeroes}</p> 
        </>
    )
}

export default User;