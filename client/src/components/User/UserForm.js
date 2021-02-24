import {useState} from "react";
import { postUser } from "../../helpers/requests";


const UserForm = ({createUser, heroes}) => {

    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [startHero, setStartHero] = useState([]);
    

    const handleNameChange = (ev) => setUserName(ev.target.value);
    
    const handleEmailChange = (ev) => setEmail(ev.target.value);
    
    // const handleHeroChange = (ev) => {
    const handleHeroChange = (ev) => {
            let value = Array.from(ev.target.selectedOptions, option => option.value);
            setStartHero({values: value});

        // const index = parseInt(ev.target.value)
        // const selectedHero = heroes[index]
        // let selectedHero = {...startHero}
        // setStartHero(selectedHero);
    }
 
    const onSubmit = (e) => {
        e.preventDefault();
        postUser({
            userName: userName,
            email: email,
            heroes: heroes
        });
        setUserName("");
        setEmail("");
        setStartHero([]);
        }
    


    const heroOptions = heroes.map((hero, index) => {

        return <option key={index} value={index}>
        {hero.name}
        </option>
    })


    return(
        <>
        <form onSubmit={onSubmit}> 
        <h3>
            Add New User
        </h3>
        <input type="text" placherholder="userName" name="userName" onChange={handleNameChange}  value={userName} required/>
    
       
        <input  type="text"  placherholder="email" name="email" onChange={handleEmailChange} value={email} required/>

        <select name="Hero" onChange={handleHeroChange} defaultValue="select-startHero" >

        <option disabled value='select-startHero'>Select a Starter Hero</option>
            {heroOptions}
        </select>  
        <input type="submit" vaule="save"/>
        </form>
        </>
    )

}

export default UserForm