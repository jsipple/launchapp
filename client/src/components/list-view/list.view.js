import React from 'react';
import { Container, Card, Col, Row } from 'react-bootstrap';
import Media from 'react-bootstrap/Media'
import FollowButton from '../button';
import DetailButton from '../DetailButton';
import moment from 'moment';
import "./list.view.css";

const ListView = (props) => {
    const {launch, index}= props
  return (
   
    <Media as="li" key={index} className="launch-list-item">
    <img
      width={64}
      height={64}
      className="mr-3"
      src={launch.image}
      alt="Generic placeholder"
    />
    <Media.Body>
      {/* <i class="wi wi-owm-210"></i>
      <i class="wi wi-owm-211"></i>
      <i class="wi wi-owm-221"></i>
      <i class="wi wi-owm-212"></i> */}

      <h5>{moment(launch.date).format("MMMM DD, YYYY hh:mm")}</h5>
      <Container>
        <Row>
          <Col xs={7}>
            <h6>{launch.company} &#xb7; {launch.rocket}</h6>
          </Col>
          <Col className="button-area" >
            <FollowButton launch={launch} id={launch.id}/>
            <DetailButton launch={launch} />
          </Col>
        </Row>
      </Container>
    </Media.Body>
  </Media>
  )
}

export default ListView;
