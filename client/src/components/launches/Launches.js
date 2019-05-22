import React from 'react';
import Template from '../template/template.wrapper'
import API from '../../utils/API';
import LaunchSlider from '../LaunchSlider/LaunchSlider';
import Spinner from 'react-bootstrap/Spinner';
import ListView from '../list-view/list.view';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clearLaunches } from '../../actions/clearLaunches';
import { setView } from '../../actions/setView';
import { addLaunch } from '../../actions/addAction';


class UpcomingLaunches extends React.Component {
  state={
    filterOrg: "All Organizations",
    filter: false,
    index: 0
  }
  componentDidMount () {
    console.log("mounted");
    this.props.clearLaunches();
    API.getUpcoming()
    .then(result => {
      console.log(result)
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
        const livestream = launch.vidURLs        
        const launchData = {id, image, location, rocket, date, timestamp, company, launchName, type, countdownTime, longitude, latitude, livestream};
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
    const filterLaunches = this.props.launches.filter(launch => launch.company === this.state.filterOrg );
    if (this.state.filter){
          if(filterLaunches.length) {
            let index = this.state.index;
            console.log("IN FILTER LAUNCHES")
            console.log(index)
            return(
              <LaunchSlider
              launchID = {filterLaunches.id}
              prevDate={((index - 1) >= 0) ? (moment(filterLaunches[(index-1)].date).format("\u21E6 " + "MMM D")): ("none") } 
              index={index}
              launch={filterLaunches[index]}
              total={filterLaunches.length}
              handleDetailClick = {this.handleDetailClick}
              handleIndexChange = {this.handleIndexChange}
              nextDate={((index + 1 < filterLaunches.length)? (moment(filterLaunches[(index+1)].date).format("MMM D" + " \u21E8")) : ("none"))} 
              />
            )
          } else {
            return (
              <div>No Results</div>
            )
          }
    } else {
      let index = this.state.index;
      return (
        <LaunchSlider
        launchID = {this.props.launches.id}
        prevDate={((index - 1) >= 0) ? (moment(this.props.launches[(index-1)].date).format("\u21E6 " + "MMM D")): ("none") } 
        index={index}
        launch={this.props.launches[index]}
        total={this.props.launches.length}
        handleDetailClick = {this.handleDetailClick}
        handleIndexChange = {this.handleIndexChange}
        nextDate={((index + 1 < this.props.launches.length)? (moment(this.props.launches[(index+1)].date).format("MMM D" + " \u21E8")) : ("none"))} 
        />
      )
    }
      
    }

    returnListView = () => {
      const filterLaunches = this.props.launches.filter(launch => launch.company === this.state.filterOrg );
      if(this.state.filter) {
        if(filterLaunches.length) {
          return (
            filterLaunches.map((launch,index) => (
              <ListView
              launchID = {this.props.launches.id}
              launch={launch} 
              key={index} 
              index={index} />)
            )
          )
        } else {
          return (
            <div>No results</div>
          )
        }
        
      } else {
        return (
          this.props.launches.map((launch,index) => (
            <ListView
            launchID = {this.props.launches.id}
            launch={launch} 
            key={index} 
            index={index} />)
          )
        ) 
      }
    }

    handleIndexChange = (change) => {
      if(change > 0 && (this.state.index + change) < this.props.launches.length) {
        this.setState({
          index: this.state.index +1
        });
      }
      if(change < 0 && (this.state.index + change) >= 0) {
        this.setState({
          index: this.state.index -1
        });
      }
      else {
        return false
      }
    }
    handleFilter = (org)=> {
      if(org === "All Organizations") {
        this.setState({
          filter: false,
          filterOrg: org,
          index: 0
        })
      } else {
        this.setState({
          filter: true,
          filterOrg: org,
          index: 0
          })
      }
      
    }
  render() {
    console.log(this.props.launches)
    return (
      <Template handleViewChange={this.handleViewChange} handleFilter={this.handleFilter} filterOrg={this.state.filterOrg} >
      {this.props.launches.length ? 
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
  return bindActionCreators({ setView, addLaunch, clearLaunches }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(UpcomingLaunches);

