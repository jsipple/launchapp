import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './OrganizationComp.css'
import { Link } from 'react-router-dom'
import NASA from '../../images/nasa.png'
import spacex from '../../images/spacex.png'
import ula from '../../images/ula.png'


class OrganizationComp extends Component {
render() {
 return(
  <Fragment>
   <div>
   <Link to='organizations/nasa'>
    <img
      width={200}
      height={200}
      className="mr-3"
      src={NASA}
      alt="Generic placeholder"
    />
      </Link>
   <Link to='organizations/spacex'>
    <img
      width={250}
      height={75}
      className="mr-3"
      src={spacex}
      alt="Generic placeholder"
    />
      </Link>
   <Link to='organizations/United_Launch_Alliance'>
    <img
      width={200}
      height={150}
      className="mr-3"
      src={ula}
      alt="Generic placeholder"
    />
      </Link>
   </div>

  </Fragment>
 )
 }
}

export default OrganizationComp