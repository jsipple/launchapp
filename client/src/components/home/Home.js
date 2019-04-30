import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Home.css'

class Home extends Component {
    state= {
        index: 0,
        direction: null
    }
    
    handleSelect = (selectedIndex, e) =>  {
        this.setState({
          index: selectedIndex,
          direction: e.direction,
        });
      }
    render () {
        const {index, direction} = this.state;
     return (
            <div>
        <Container>
            <Row>
                <Col></Col>
                <Col xs={8}>
                <h1>Hello</h1>
                <Carousel
                        activeIndex={index}
                        direction={direction}
                        onSelect={this.handleSelect}
                    >
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/200"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/200"
                            alt="Third slide"
                        />
    
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://via.placeholder.com/200"
                            alt="Third slide"
                        />
    
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col></Col>
            </Row>
        </Container>
            </div>
            )
        }
    }

export default Home;