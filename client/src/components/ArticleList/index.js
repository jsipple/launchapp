import React from 'react';
import Media from 'react-bootstrap/Media';

const ArticleList = (props) => {
    const {image} =props
    return (
<ul className="list-unstyled">
  <Media as="li">
    <img
      width={64}
      height={64}
      className="mr-3"
      src={image}
      alt="Generic placeholder"
    />
    <Media.Body>
      {/* <i class="wi wi-owm-210"></i>
      <i class="wi wi-owm-211"></i>
      <i class="wi wi-owm-221"></i>
      <i class="wi wi-owm-212"></i> */}

      <h5>List-based media object</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>
    </Media.Body>
  </Media>

  
</ul>
    )
}

export default ArticleList;