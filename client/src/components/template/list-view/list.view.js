import React from 'react';
import { Template } from '../template.wrapper';
import { Card, Button, Row, Col } from 'react-bootstrap';

export const ListView = () => {
  return (
    <div>
      <Template>
        
        <Card style={{ margin: 40}}>
        <Row>
          <Col>
          <p>Image here</p>
          </Col>
          <Col>
            <h3>Title here</h3>
          </Col>
          <Col>
            <p>Details Here</p>
          </Col>
          <Col>
            <div>
              <Button>Button Here</Button>
              <div>Logo Here</div>
            </div>
          </Col>
            </Row>
        </Card>

        <Card style={{ margin: 40}}>
        <Row>
          <Col>
          <p>Image here</p>
          </Col>
          <Col>
            <h3>Title here</h3>
          </Col>
          <Col>
            <p>Details Here</p>
          </Col>
          <Col>
            <div>
              <Button>Button Here</Button>
              <div>Logo Here</div>
            </div>
          </Col>
            </Row>
        </Card>
      </Template>
    </div>
  )
}
