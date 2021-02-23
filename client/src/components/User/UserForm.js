import {useState} from "react";
import { postUser } from "../../helpers/requests";


const UserForm = ({heroes}) => {
    const [stateUser, setStateUser] = useState (
        {
        userName: "",
        email: "",
        heroes: [],
        }
    )
    const onChange = (e) => {
        let propertyName = e.target.name;
        let copiedUser = {...stateUser}
        copiedUser[propertyName] = e.target.vaule;
        setStateUser(copiedUser)
    }


    const onSubmit = (e) => {
        e.preventDefault();
        postUser(stateUser);
    } 


    // const heroOptions = heroes.map((hero) => {

    //     return <option key={hero.id} value={hero.id}>
    //     {hero.name}
    //     </option>
    // })


    return(
        <>
        <form onSubmit={onSubmit}> 
        <h3>
            Add New User
        </h3>
        <label for="userName">Username:</label>
        <input type="text" id="userName" onChange={onChange}  value={stateUser.userName} required/>
    
        <label for="email">Email:</label>
        <input  type="text" id="email" onChange={onChange} value={stateUser.email} required/>
{/* 
        <select name="Hero"  defaultValue="select-hero">
        <option disabled value='select-hero'>Select a Starter Hero</option>
            {heroOptions}
        </select>  
        <input type="submit" vaule="save" id="save"/> */}
        </form>
        </>
    )

}

export default UserForm