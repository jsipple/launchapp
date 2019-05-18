import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './OrganizationComp.css'
import { Link } from 'react-router-dom'
class OrganizationComp extends Component {
render() {
 return(
  <Fragment>
   <div>Organization component
    <Link to='organizations/nasa'><p>Nasa</p> </Link>
   </div>

  </Fragment>
 )
 }
}

export default OrganizationComp