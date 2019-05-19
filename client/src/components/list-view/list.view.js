import React from 'react';
import { Card } from 'react-bootstrap';
import FollowButton from '../button';
import DetailButton from '../DetailButton';
import "./list.view.css";

const ListView = (props) => {
    const {launch, index}= props
  return (
    <div>
        <Card className="list-view" style={{ margin: 40, backgroundColor: "blue"}}>
            <Card.Img style={{height: 100, width: 100}}className="list-image" variant="top" src={launch.image}/>
            <Card.Body>
                <Card.Title>{launch.date}</Card.Title>
                <Card.Text>
                  <p>{launch.company} | {launch.rocket} </p>
                  <p>{launch.location}</p>
                </Card.Text>
                <DetailButton index={index} />
                <FollowButton text={"Follow"}/>
            </Card.Body>
        </Card>
    </div>
  )
}

export default ListView;
