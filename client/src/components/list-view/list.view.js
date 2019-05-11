import React from 'react';
import { Card, Button } from 'react-bootstrap';

const ListView = (props) => {
    const {launch}= props
    console.log("LISTVIEW", launch);
  return (
    <div>
        <Card style={{ margin: 40}}>
            <Card.Img style={{height: 100, width: 100}}className="list-image" variant="top" src={launch.image}/>
            <Card.Body>
                <Card.Title>{launch.date}</Card.Title>
                <Card.Text>
                  <p>{launch.company} | {launch.rocket} </p>
                  <p>{launch.location}</p>
                </Card.Text>
                <Button variant="dark">Add To Favorite</Button>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ListView;
