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
                <h2>{hero.name}</h2>
            </Card.Title>

            <Card.Text className="heroCardStats">
            <li className="list-group-item"><b>Intelligence</b> {hero.intelligence}</li>
            <li className="list-group-item"><b>Strength:</b> {hero.strength}</li>
            <li className="list-group-item"><b>Speed:</b><br></br> {hero.speed}</li>
            <li className="list-group-item"><b>Durabality:</b> {hero.durability}</li>
            <li className="list-group-item"><b>Power:</b><br></br>{hero.power}</li>
            <li className="list-group-item"><b>Combat:</b><br></br>{hero.combat}</li>
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