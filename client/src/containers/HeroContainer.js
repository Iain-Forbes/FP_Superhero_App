import { useEffect } from 'react';
import { useState } from 'react';
import HeroList from "../components/Hero/HeroList"
import HeroDetail from "../components/Hero/HeroDetail"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Pagination  from "../components/Pagination/Pagination"
import UserForm from '../components/User/UserForm';

const HeroContainer = () => {

    const [heroes, setHeroes] = useState([]);
    const [loading, setLoading] = useState(false)
    const [currentPage, setCurrentPage] = useState(1)
    const [heroesPerPage, setPerPageHeroes] = useState(48)
    const URL = 'Http://localhost:8081/heroes'


    useEffect(()=>{
    const fetchHeroes = () => {
        fetch(URL)
        .then(res => res.json())
        .then(data => setHeroes(data))
        setLoading(false);
      };

        fetchHeroes()
      }, [])

      const findHeroByID =
      function(id){
          return heroes.find((hero) => {
              return hero.id === (id);
          })
      }

      //Pagination 
        const indexOfLastPost = currentPage * heroesPerPage
        const indexOfFirstPost = indexOfLastPost - heroesPerPage
        const currentPosts = heroes.slice(indexOfFirstPost, indexOfLastPost )
        const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return(
       
            <Switch>
                 <>
                 
                <Route exact path ="/heroes/:id" render={(props) =>{
                    const id = props.match.params.id;
                    const hero = findHeroByID(id)

                    return <HeroDetail hero={hero}/>
                   
                }}/>

                <Route exact path="/heroes" render = {() =>{
            
                    return( 
                    <div className="heroDisplay">
                    <HeroList heroes = {currentPosts} loading={loading}/>
                    <div className ="pageNumbers">
                    <Pagination heroesPerPage={heroesPerPage} totalPosts = {heroes.length} paginate ={paginate}/>
                    </div>
                    </div>
                    )}}/>
                    
            </>     
            </Switch>
            
    )

}

export default HeroContainer