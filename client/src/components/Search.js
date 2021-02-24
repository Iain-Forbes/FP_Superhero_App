import {useState} from 'react'

const Search = ({heroes}) => {

    const [params, setParams] =  useState()
    
  
    

    return(
    <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="search" aria-label="Search"  /> 
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
    )
}

export default Search 
