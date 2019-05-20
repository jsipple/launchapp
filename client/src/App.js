import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home';
import Landing from './pages/Landing';
import { LaunchList } from './pages/LaunchList';
import LaunchDetails from './pages/LaunchDetails';
import MyLaunches from './pages/MyLaunches';
import PastLaunches from './pages/PastLauches';
import Organizations from './pages/Organizations';
import Profile from './pages/Profile';
import TestComponent from './components/test-see/Test.component';
import missionDetails from './components/missionDetails/MissionDetails'
import OrganizationDetails from './pages/OrganizationDetails'
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount = () => {
    console.log(this.props.appState.userData)
  }
  render() {
    return (
      
      <div className="App">
        {(this.props.appState.userData[0] !== undefined) ? 
        <Router>
          <Route exact path='/home' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/' exact={true} component={Landing} />
          <Route exact path='/launches/upcoming' component={Home} />
          <Route exact path='/launches/details' component={LaunchDetails} />
          <Route exact path ='/launches/list' component={LaunchList} />
          <Route exact path='/launches/past' component={PastLaunches} />
          <Route exact path='/launches/test' component={TestComponent} />
          <Route exact path='/launches/fav' component={MyLaunches} />
          <Route exact path='/organizations' component={Organizations} />
          <Route exact path='/organizations/:id' component={OrganizationDetails} />
        </Router>
        // so it's forcing me to add the router here which is weird
        : <Router><Landing /></Router>}

      </div>
    );
  }
}
const mapStateToProps = state => ({appState: state});
export default connect(mapStateToProps)(App);
