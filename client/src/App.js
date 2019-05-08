import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import homeRoute from './routes/homeRoute'
import Navbar from './components/navbar/Navbar'
import profileRoute from './routes/profileRoute';
import notificationsRoute from './routes/notificationsRoute';
import launchesRoute from './routes/launchesRoute';
import pastLaunchesRoute from './routes/pastLaunchesRoute';
import favoritedLaunchesRoute from './routes/favoritedLaunchesRoute';
import organizationsRoute from './routes/organizationsRoute';

class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Router>
          <Navbar />
          <Route path='/home' component={homeRoute} />
          <Route path='/profile' component={profileRoute} />
          {/* will this be where they set notification settings? like saying if favorited send email or a list of notifications? */}
          <Route path='/notifications' component={notificationsRoute} />
          <Route exact path='/launches/upcoming' component={launchesRoute} />
          <Route exact path='/launches/past' component={pastLaunchesRoute} />
          <Route exact path='/launches/fav' component={favoritedLaunchesRoute} />
          {/* what do we want in here descriptons of the origanization upcoming/past launches links to their website etc? */}
          <Route path='/organizations' component={organizationsRoute} />
        </Router>
      </div>
    );
  }
}

export default App;
