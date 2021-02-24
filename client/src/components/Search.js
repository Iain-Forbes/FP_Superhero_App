import {useState} from 'react'

const Search = ({heroes}) => {

    const [params, setParams] =  useState("")
    console.log(params)
   
    

    return(
    <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="search" aria-label="Search" onChange={(e) => setParams(e.target.value)}/> 
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    )
}

export default Search 
