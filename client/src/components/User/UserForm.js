import {useState} from "react";
import { postUser } from "../../helpers/requests";

const CreateUser = ({addUser}) => {
    const [formData, setFormData] = useState ({})
    const onChange = (e) => {
        formData[e.target.id] = e.target.value;
        setFormData(formData)
    }


    const onSubmit = (e) => {
        e.preventDefault();
        postUser(formData)
        .then(() => {
            addUser(formData)
        })
    } 


    return(
        <>
        <form onSubmit={onSubmit}> 
        <h3>
            Add New User
        </h3>
        <div>
            <label for="name">Name:</label>
            <input onChange={onChange} type="text" id="name" required/>
        </div>
        <input type="submit" vaule="save" id="save"/>
        </form>
        </>
    )

}

export default CreateUser