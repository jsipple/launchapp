import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './OrganizationComp.css'
import { Link } from 'react-router-dom'
import NASA from '../../images/nasa.png'
import spacex from '../../images/spacex.png'
import ULA from '../../images/ula.png'
import arianespace from '../../images/arianespace.png'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addAgency } from '../../actions/agencyName' 

class OrganizationComp extends Component {
render() {
 return(
  <Fragment>
   <div>
   <Link to='organizations/nasa' onClick={() => this.props.addAgency('National Aeronautics and Space Administration', 'NASA', {NASA})}>
    <img
      width={200}
      height={200}
      className="mr-3 logos"
      src={NASA}
      alt="Generic placeholder"
    />
      </Link>
   <Link to='organizations/arianespace' onClick={() => this.props.addAgency('arianespace', 'arianespace', {arianespace})}>
    <img
      width={200}
      height={150}
      className="mr-3 logos"
      src={arianespace}
      alt="Generic placeholder"
    />
      </Link>
   <Link to='organizations/spacex' onClick={() => this.props.addAgency('spacex', 'spacex', {spacex})}>
    <img
      width={250}
      height={50}
      className="mr-3 logos"
      src={spacex}
      alt="Generic placeholder"
    />
      </Link>

   <Link onClick={() => this.props.addAgency('United Launch Alliance', 'ULA', {ULA})} to='organizations/United_Launch_Alliance'>
    <img
      width={150}
      height={100}
      className="mr-3 logos"
      src={ULA}
      alt="Generic placeholder"
    />
      </Link>
   </div>

  </Fragment>
 )
 }
}
const mapStateToProps = state => ({
    appState: state
  });
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addAgency }, dispatch);
  };
export default connect(mapStateToProps, mapDispatchToProps)(OrganizationComp)