import {Link} from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';



const Hero = ({hero}) => {

    const url = "/heroes/" + hero.id


  
        return(
            <>
            <Card style={{ width: '17rem' }}>
            <Card.Img variant="top" src={hero.heroImg}/>

            <Card.Body>
            <Card.Title className ="heroCardName">
                {hero.name}
            </Card.Title>

            <Card.Text className="heroCardStats">
            <li className="list-group-item">Intelligence: {hero.intelligence}</li>
            <li className="list-group-item">Strength: {hero.strength}</li>
            <li className="list-group-item">Speed: {hero.speed}</li>
            <li className="list-group-item">Durabality: {hero.durability}</li>
            <li className="list-group-item">Power : {hero.power}</li>
            <li className="list-group-item">Combat :{hero.combat}</li>
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