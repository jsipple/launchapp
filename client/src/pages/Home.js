import React from 'react';
import Template from '../components/template/template.wrapper'
import API from '../utils/API';
import LaunchSlider from '../components/LaunchSlider';
import Spinner from 'react-bootstrap/Spinner';
import ListView from '../components/list-view/list.view';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setView } from '../actions/setView';
import { addLaunch } from '../actions/addAction';


class Home extends React.Component {
  constructor(props) {
    super(props)
  }
  state ={
    launches: [],
    index: 0,
    view: "slider"
  }
  componentDidMount () {
    console.log("mounted");
    API.getUpcoming()
    .then(result => {
      console.log(result);
      let launches = [];
      
      result.data.launches.forEach(launch => {
        const id = launch.id ? (launch.id): (1)
        const location = launch.location.name ? (launch.location.name) : ("")
        const rocket = launch.rocket.name ? (launch.rocket.name) : ("");
        const date = launch.net ? (launch.net) : ("");
        const timestamp = launch.netstamp ? (launch.netstamp) : ("");
        const company = launch.lsp.name ? (launch.lsp.name) : ("");
        const launchName = (launch.missions.length && launch.missions[0].name) ? (launch.missions[0].name) : ("");
        const type =  (launch.missions.length && launch.missions[0].typeName )? (launch.missions[0].typeName) : ("");
        const image = (launch.rocket.imageURL) ? (launch.rocket.imageURL) : ('./images/ea4078548b2778ad6487e1dfd3d4978fb67cdb2c.png');
        const launchData = {id, image, location, rocket, date, timestamp, company, launchName, type};
        
        // console.log("LAUNCHDATA",launchData)
        launches.push(launchData)
      })
      this.setState({
        launches: launches
      })
      // this.props.addLaunch(launches);
    })
    .catch(err => console.log(err));
  }

  handleViewChange = (view) => {
    
    // this.setState({
    //   view: view
    // });
    this.props.setView();
  }

  returnLaunchSlider = () => {
    const {launches, index} = this.state
    // const {launches, index} = this.props.appState.launches;
      return (
        <LaunchSlider 
        prevDate={((index - 1) >= 0) ? (launches[(index-1)].date): ("none") } 
        launch={launches[index]}
        total={launches.length}
        handleIndexChange = {this.handleIndexChange}
        nextDate={((index + 1 < launches.length)? (launches[(index+1)].date) : ("none"))} 
        />
      )
    }

    returnListView = () => {
      const launches = this.state.launches
      return (
        launches.map((launch,index) => (
          <ListView launch={launch} key={index} />)
        )
      )
    }

    handleIndexChange = (change) => {
      if(change > 0 && (this.state.index + change) < this.state.launches.length) {
        this.setState({
          index: this.state.index + 1
        })
      }
      if(change < 0 && (this.state.index + change) >= 0) {
        this.setState({
          index: this.state.index -1
        })
      }
      else {
        return false
      }
    }
  render() {
    const {launches} = this.state;
    console.log(launches)
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
  return bindActionCreators({ setView, addLaunch }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

