import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import FollowButton from '../button';
import Button from 'react-bootstrap/Button';
import Counter from '../Counter';
import DetailButton from '../DetailButton';
import Weather from '../Weather';
import moment from 'moment';
import "./LaunchSlider.css";

const LaunchSlider = (props) => {
    const {launch, prevDate, nextDate, total, handleIndexChange, index} = props
    return(
        <Container className="slider">
            <Row>
                <Col>
                    <Container>
                        <Row>
                            <Col>
                                <ul className="launch-data">
                                    <li className="date">{moment(launch.date).format("MMMM DD, YYYY")} </li>
                                    <li className="time">{moment(launch.date).format("LTS")} </li>
                                    <li className="count-down"><Counter date={`${launch.countdownTime}`} /></li>
                                    <li className="location">{launch.location}</li>
                                    <Weather long={launch.longitude} lat ={launch.latitude} />
                                </ul>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                               <ul className="launch-data">
                                   <li className="company"> {launch.company}</li>
                                   <li className="rocket">{launch.rocket}</li>
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
                    <DetailButton className="details-btn" launch={launch} />
                </Col>
                <Col>
                    <FollowButton id={launch.id} launch={launch} />
                </Col>
            </Row>
            <Row>
                <Col>
                    
                {prevDate !== 'none' ? <Button className="slider-btn-l" onClick={()=> handleIndexChange(-1)}> {prevDate} </Button> : ''}
                </Col>
                <Col>
                    <p className="upcoming">{total} Launches</p>
                </Col>
                <Col>
                {nextDate !== 'none' ? <Button className="slider-btn-r" onClick={()=> handleIndexChange(1)}> {nextDate} </Button> : ''}
                </Col>
            </Row>
        </Container>
    )
}

export default LaunchSlider;