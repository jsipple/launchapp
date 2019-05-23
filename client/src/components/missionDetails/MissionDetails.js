import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './MissionDetails.css'
import axios from 'axios'
import Articles from '../articles/Articles'
import { bindActionCreators } from 'redux'
import { getCurrentLaunch } from '../../actions/currentLaunch'
import { connect } from 'react-redux'


class MissionDetails extends Component {
 constructor(props) {
     super(props)
 }

render() {
    console.log(this.props.state.launches)
// let image = <img alt='test' src={this.state.rocket.imageURL} />
 return(
  <Fragment>
    {/* <Articles name={this.state.launchData}/> */}
   <div>mission details component</div>
  </Fragment>
 )
 }
}

const mapStateToProps = state => state

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        getCurrentLaunch
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MissionDetails)