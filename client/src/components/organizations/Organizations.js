import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Organizations.css'
import Articles from '../articles/Articles'


class Organizations extends Component {
render() {
 return(
  <Fragment>
      <Articles name="Apollo" />
   <div>Organization component</div>

  </Fragment> 
 )
 }
}

export default Organizations