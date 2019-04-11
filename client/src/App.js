import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
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
        <BrowserRouter>
          <Navbar />
          <Route path='/home' component={homeRoute} />
          <Route path='/profile' component={profileRoute} />
          <Route path='/notifications' component={notificationsRoute} />
          <Route exact path='/launches/upcoming' component={launchesRoute} />
          <Route exact path='/launches/past' component={pastLaunchesRoute} />
          <Route exact path='/launches/fav' component={favoritedLaunchesRoute} />
          <Route path='/organizations' component={organizationsRoute} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
