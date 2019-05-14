import React from 'react';
import Template from '../components/template/template.wrapper';
import Login from '../components/login/Login';
import {Col, Row, Container} from 'react-bootstrap';
// import { url } from 'inspector';

const Landing = () => {
    return (
      <Template>      
        <Container className="login">
            <Row>
                <Col>
                <Login />
                </Col>
            </Row>
        </Container>
        </Template>
  
       
    );
}


export default Landing;