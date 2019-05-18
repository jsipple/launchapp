import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './OrganizationDetail.css'
import API from '../../utils/API'
class OrganizationDetail extends Component {
 componentDidMount = () => {
  let agencyName = window.location.pathname.replace('/organizations/', '')
  API.getAgency(agencyName)
   .then(res => {
    console.log(res)
   })
 }
render() {
 return(
  <Fragment>
   <div>Organization component</div>
  </Fragment>
 )
 }
}

export default OrganizationDetail