import React, { Fragment } from 'react';
import Launches from '../components/launches/Launches';
// pass a function that looks for the users favorites and displays it in launches format
const favoritedLaunchesRoute = () => {
 return (
  <Fragment>
   <Launches />
  </Fragment>
 )
}

export default favoritedLaunchesRoute