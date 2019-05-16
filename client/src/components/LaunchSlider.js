import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FollowButton from '../components/button';
import Button from 'react-bootstrap/Button';
import Counter from '../components/Counter';
import DetailButton from '../components/DetailButton';

const LaunchSlider = (props) => {
    const {launch, prevDate, nextDate, total, handleIndexChange, index} = props
    // console.log("LAUNCH SLIDER", launch.countdownTime)
    // console.log(launch.company)
    return(
        <Container className="slider" style={{backgroundColor: "blue"}}>
            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Col>
                                <ul>
                                    <li>Location: {launch.location}</li>
                                    <li>Date: {launch.date} </li>
                                    <Counter date={`${launch.countdownTime}`} />
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                               <ul>
                                   <li>Company: {launch.company}</li>
                                   <li>Rocket: {launch.rocket}</li>
                               </ul>
                            </Col>
                        </Row>
                    </Container>
                </Col>
                <Col>
                    <img id="rocket-pic" style={{height: 400, width: 400}}src={launch.image} alt="rocket"/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <DetailButton index={index} />
                </Col>
                <Col>
                    <FollowButton text="Follow" />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Button onClick={()=> handleIndexChange(-1)}> {prevDate} </Button>
                </Col>
                <Col>
                    <h4>{total} Upcoming</h4>
                </Col>
                <Col>
                    <Button onClick={()=> handleIndexChange(1)}> {nextDate} </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default LaunchSlider;