import {useState} from "react";
import { postUser } from "../../helpers/requests";


const UserForm = ({addUser, heroes}) => {

    const [stateUser, setStateUser] = useState (
        {
        userName: "",
        email: "",
        heroes: null,
        }
    )

    const onChange = function(e){
        console.log("name", e.target)
        let copiedUser = {...stateUser}
        if(e.target.name === "userName"){
            copiedUser.userName = e.target.value
        }else{
            copiedUser.email = e.target.value
        }
        setStateUser(copiedUser)
    }


    const onSubmit = (e) => {
        e.preventDefault();
        addUser(stateUser);
    } 


    const heroOptions = heroes.map((hero) => {

        return <option key={hero.id} value={hero.id}>
        {hero.name}
        </option>
    })


    return(
        <>
        <form onSubmit={onSubmit}> 
        <h3>
            Add New User
        </h3>
        <input type="text" placherholder="userName" name="userName" onChange={onChange}  value={stateUser.userName} required/>
    
       
        <input  type="text"  placherholder="email" name="email" onChange={onChange} value={stateUser.email} required/>

        <select name="Hero"  defaultValue="select-hero">
        <option disabled value='select-hero'>Select a Starter Hero</option>
            {heroOptions}
        </select>  
        <input type="submit" vaule="save" id="save"/>
        </form>
        </>
    )

}

export default UserForm