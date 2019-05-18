import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './MissionDetails.css'
import axios from 'axios'
class MissionDetails extends Component {
    state = {
        launchData: []
    }
componentDidMount = () => {
    let launchID = window.location.pathname.replace('/launches/details/', '')
    axios.get('https://launchlibrary.net/1.4/launch/' + launchID)
        .then(res => {
            console.log(res.data.launches[0])
            this.setState({
                launchData: res.data.launches[0]
            })
        })
}
render() {
    // let image = <img alt='test' src={this.state.rocket.imageURL} />
 return(
  <Fragment>
   <div>mission details component</div>
  </Fragment>
 )
 }
}

export default MissionDetails