import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import homeRoute from './routes/homeRoute'
import profileRoute from './routes/profileRoute';
import notificationsRoute from './routes/notificationsRoute';
import launchesRoute from './routes/launchesRoute';
import pastLaunchesRoute from './routes/pastLaunchesRoute';
import favoritedLaunchesRoute from './routes/favoritedLaunchesRoute';
import organizationsRoute from './routes/organizationsRoute';
import Template from './components/template-wrapper/Template';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Router>
          <Template />
          <Route path='/home' component={homeRoute} />
          <Route path='/profile' component={profileRoute} />
          {/* will this be where they set notification settings? like saying if favorited send email or a list of notifications? */}
          <Route exact path='/launches/upcoming' component={Home} />
          <Route path='/details' component={LaunchDetails} />
          <Route path ='/launches/list' component={LaunchList} />
          <Route exact path='/launches/past' component={PastLaunches} />
          <Route exact path='/launches/fav' component={MyLaunches} />
          {/* what do we want in here descriptons of the origanization upcoming/past launches links to their website etc? */}
          <Route path='/organizations' component={Organizations} />
        </Router>
      </div>
    );
  }
}

export default App;
