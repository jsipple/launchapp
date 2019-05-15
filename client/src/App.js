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


class App extends Component {
  render() {
    return (
      
      <div className="App">
        <Router>
          <Route exact path='/home' component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/' component={Landing} />
          {/* will this be where they set notification settings? like saying if favorited send email or a list of notifications? */}
          <Route exact path='/launches/upcoming' component={Home} />
          <Route exact path='/launches/details/id' component={LaunchDetails} />
          <Route exact path ='/launches/list' component={LaunchList} />
          <Route exact path='/launches/past' component={PastLaunches} />
          <Route exact path='/launches/test' component={TestComponent} />
          <Route exact path='/launches/fav' component={MyLaunches} />
          {/* what do we want in here descriptons of the origanization upcoming/past launches links to their website etc? */}
          <Route path='/organizations' component={Organizations} />
        </Router>
      </div>
    );
  }
}

export default App;
