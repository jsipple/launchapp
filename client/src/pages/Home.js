import React from 'react';
import Template from '../components/template/template.wrapper'
import API from '../utils/API';
import LaunchSlider from '../components/LaunchSlider/LaunchSlider';
import Spinner from 'react-bootstrap/Spinner';
import ListView from '../components/list-view/list.view';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setView } from '../actions/setView';
import { addLaunch } from '../actions/addAction';
import { incrementIndex, decrementIndex } from '../actions/indexActions';



class Home extends React.Component {
  componentDidMount () {
    console.log("mounted");
    API.getUpcoming()
    .then(result => {
      let launches = [];
      
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
        const image = (launch.rocket.imageURL) ? (launch.rocket.imageURL) : ('./images/ea4078548b2778ad6487e1dfd3d4978fb67cdb2c.png');
        const countdownTime = moment(date).format("YYYY-MM-DTHH:mm:ss");
        const launchData = {id, image, location, rocket, date, timestamp, company, launchName, type, countdownTime, longitude, latitude};
        
        
        // console.log("LAUNCHDATA",launchData)
        this.props.addLaunch(launchData);
      })
    })
    .catch(err => console.log(err));
  }

  handleViewChange = (view) => {
    this.props.setView();
  
  }
  
  returnLaunchSlider = () => {
    const {launches, index} = this.props.appState;
      return (
        <LaunchSlider 
        launchID = {launches.id}
        prevDate={((index - 1) >= 0) ? (moment(launches[(index-1)].date).format("\u21E6 " + "MMM D")): ("none") } 
        index={index}
        launch={launches[index]}
        total={launches.length}
        handleDetailClick = {this.handleDetailClick}
        handleIndexChange = {this.handleIndexChange}
        nextDate={((index + 1 < launches.length)? (moment(launches[(index+1)].date).format("MMM D" + " \u21E8")) : ("none"))} 
        />
      )
    }

    returnListView = () => {
      const launches = this.props.appState.launches;
      return (
        launches.map((launch,index) => (
          <ListView 
          launchID = {launches.id}
          launch={launch} 
          key={index} 
          index={index} />)
        )
      )
    }

    handleIndexChange = (change) => {
      if(change > 0 && (this.props.appState.index + change) < this.props.appState.launches.length) {
        // this.setState({
        //   index: this.props.appState.index + 1
        // })
        this.props.incrementIndex();
      }
      if(change < 0 && (this.props.appState.index + change) >= 0) {
        // this.setState({
        //   index: this.props.appState.index -1
        // })
        this.props.decrementIndex();
      }
      else {
        return false
      }
    }
  render() {
    console.log(this.props.appState)
    const {launches} = this.props.appState;
    return (
      <Template handleViewChange={this.handleViewChange}>
      {launches.length ? 
        ((this.props.appState.launchView === 'slider') ? (this.returnLaunchSlider()) : (this.returnListView())) 
        :
        (<Spinner animation="border" role="status">
          <span className="sr-only"> Loading ... </span>
          </Spinner>)}
      </Template>
    );
  }
}

const mapStateToProps = state => ({
  appState: state
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setView, addLaunch, incrementIndex, decrementIndex }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

