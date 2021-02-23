import {Link} from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';



const Hero = ({hero}) => {

    const url = "/heroes/" + hero.id


  
        return(
            <>
            <Card style={{ width: '16rem' }}>
            <Card.Img variant="top" src={hero.heroImg}/>

            <Card.Body>
            <Card.Title className ="heroCardName">
                <h2>{hero.name}</h2>
            </Card.Title>

            <Card.Text className="heroCardStats">
                    <p>Intelligence: {hero.intelligence}</p>
                    <p>Strength: {hero.strength}</p>
                    <p>Speed: {hero.speed}</p>
                    <p>Durabality: {hero.durability}</p>
                    <p>Power : {hero.power}</p> 
                    <p>Combat :{hero.combat}</p>
            </Card.Text>
            <div className="heroCardButtons">
                <Button variant="btn btn-success"  > Recruit </Button> 
                <Button variant="btn btn-info" href={url} > Biography </Button>
            </div>
            </Card.Body>
            </Card>
       </>
    
        )}

export default Hero;