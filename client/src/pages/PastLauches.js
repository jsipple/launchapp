import React, { Component } from 'react';
import Template from '../components/template/template.wrapper';
import API from '../utils/API';
import { connect } from 'react-redux';
import UpcomingLaunches from '../components/launches/Launches'
import Spinner from "react-bootstrap/Spinner";
import moment from 'moment';

class PastLaunches extends Component {
    state = {
        launches: []
    }
    componentDidMount () {
        let past = new Date(new Date().setFullYear(new Date().getFullYear() -1)).toISOString()
        past = past.substring(0, 10)
        API.getPast(past)
        .then(result => {
            const launches = [];
            console.log(result);
            result.data.launches.forEach(launch => {
                const id = launch.id ? (launch.id): (1)
                const location = launch.location.name ? (launch.location.name) : ("");
                const longitude = launch.location.pads[0] ? (launch.location.pads[0].longitude) : ("");
                const latitude = launch.location.pads[0] ? (launch.location.pads[0].latitude) : ("");
                const rocket = launch.rocket.name ? (launch.rocket.name) : ("");
                const date = launch.net ? (launch.net) : ("");
                const timestamp = launch.netstamp ? (launch.netstamp) : ("");
                const company = launch.lsp.name ? (launch.lsp.name) : ("");
                const launchName = (launch.missions.length && launch.missions[0].name) ? (launch.missions[0].name) : ("");
                const type =  (launch.missions.length && launch.missions[0].typeName )? (launch.missions[0].typeName) : ("");
                const image = (launch.rocket.imageURL === "https://s3.amazonaws.com/launchlibrary/RocketImages/placeholder_1920.png") ? ("../images/placeholder-rocket.jpeg") : (launch.rocket.imageURL)
                const countdownTime = moment(date).format("YYYY-MM-DTHH:mm:ss");
                const launchData = {id, image, location, rocket, date, timestamp, company, launchName, type, countdownTime, longitude, latitude};
                launches.push(launchData)
            });
            this.setState({
                launches: launches
            })
        })
    }
    render() {
        console.log(this.state.launches);
        return (
            <div>
                {this.state.launches.length > 0 ? (<UpcomingLaunches launches={this.state.launches}/>) : (<Spinner animation="border" role="status">
           <span className="sr-only"> Loading ... </span>
           </Spinner>)}
            </div>  
   )
}
    }
    
const mapStateToProps = state => ({
    appState: state
  });
  
  export default connect(mapStateToProps)(PastLaunches);
