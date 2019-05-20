import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './OrganizationComp.css'
import { Link } from 'react-router-dom'
import NASA from '../../images/nasa.png'
import spacex from '../../images/spacex.png'

class OrganizationComp extends Component {
render() {
 return(
  <Fragment>
   <div>
    <Link to='organizations/nasa'><img className='logo' alt='nasa' src={NASA} /></Link>
    <Link to='organizations/SpaceX'><img className='logo' alt='spacex' src={spacex} /></Link>
   </div>

  </Fragment>
 )
 }
}

export default OrganizationComp