import React, { Fragment } from 'react';
import Launches from '../components/launches/Launches';
// pass a prop function to look for ones already launched
const pastLaunchesRoute = () => {
 return (
  <Fragment>
   <Launches />
  </Fragment>
 )
}

export default pastLaunchesRoute