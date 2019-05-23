import React, { Component } from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import RoundFollow from '../RoundFollow';
import Counter from '../Counter';
import { connect } from 'react-redux';
import moment from 'moment';
import Weather from '../Weather';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


class DetailView extends Component {

render() {
    const launch= this.props.appState.currentLaunch[0]
// let image = <img alt='test' src={this.state.rocket.imageURL} />
 return(
    <Container className="detail-view">
                    <Row>
                        <Col xs={5}>
                        <img id="rocket-pic" style={{height: 300, width: 300}} src={launch.image} alt="rocket"/>
                        </Col>
                        <Col xs={4} className="details-col">
                            <ul className="detail-data">
                                <li className="detail-location">{launch.location}</li>
                                <li className="detail-company"> {launch.company}</li>
                                <li className="detail-rocket">{launch.rocket}</li> 
                            </ul>
                            <Weather long={launch.longitude} lat ={launch.latitude} />
                        </Col>
                        <Col xs={3} >
                            <Container>
                                <Row>
                                    <Col className="back-col">
                                        <Link to={"/launches/upcoming"}><Button variant="warning" size="lg">&#8678; Launches</Button></Link>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col  className="follow-col">
                                        <RoundFollow id={launch.id} launch={launch} />
                                        <br />
                                        {launch.livestream != '' ? <a href={launch.livestream} target='_blank' ><button className='link'><i class="far fa-play-circle"></i> watch liveStream</button></a> : 'livestream not available at this time'}
                                    </Col>
                                </Row>
                            </Container>
                        </Col>
                    </Row>
                    <Row className="detail-counter">    
                        <Col>
                            <ul className="detail-data">
                                <li className="date">{moment(launch.date).format("MMMM DD, YYYY")} </li>
                                <li className="time">{moment(launch.date).format("LTS")} </li> 
                            </ul>
                        </Col>
                        <Col>
                            <div className="detail-count-down"><Counter date={`${launch.countdownTime}`} /> </div>
                        </Col>
                    </Row>
    </Container>
 )
 }
}

const mapStateToProps = state => ({
    appState: state
});

export default connect(mapStateToProps)(DetailView)