import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import TwitterLogin from 'react-twitter-auth';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import ids from '../../config'

class Login extends Component {
  // need to save this state to store as well figure out if i want to use token
  state = {
    isAuthenticated: false,
    user: null,
    token: ''
  }
  handleLogout = () => {
    console.log(this.state.user)
    this.setState({
      isAuthenticated: false,
      user: null,
      token: ''
    })
  }
  // this is working
  googleResponse = (response) => {
    console.log(response)
    axios.get('/login/google', response )
      .then(res => {
        this.setState({
          user: res.config.profileObj,
          isAuthenticated: true
        })
      })
  }
  // says needs to be https for this to run what do i need to do
  facebookResponse = (response) => {
    axios.get('/login/facebook', response)
      .then(res => {
        console.log(res)
      })
  }
  twitterResponse = (response) => {
    axios.get('/login/twitter', response)
      .then(res => {
        console.log(res)
      })
  }
  onFailure = error => {
    alert(error)
  }
  handleServer = () => {
  // this is not being grabbed trying to get 3000 still
    // getting a 404 not found seem sissue with proxy probably
    axios.get('/auth/login', (req, res) => {
    })
    .then(res => {
      console.log(res.data)
    })
  }
  render() {
    let content = this.state.isAuthenticated ?
        (
            <div>
                <p>Authenticated</p>
                <div>
                    {this.state.user.email}
                </div>
                <div>
                    <button onClick={this.handleLogout} className="button">
                        Log out
                    </button>
                </div>
            </div>
        ) :
        (
            <div>
                <TwitterLogin loginUrl="localhost:8080/login/twitter"
                               onFailure={this.twitterResponse} onSuccess={this.twitterResponse}
                               requestTokenUrl="http://localhost:8080/auth/twitter/reverse"/>
                <FacebookLogin
                    appId={ids.facebook.clientID}
                    autoLoad={false}
                    fields="name,email,picture"
                    callback={this.facebookResponse} />
                <GoogleLogin
                    clientId={ids.google.clientID}
                    buttonText="Login"
                    onSuccess={this.googleResponse}
                    onFailure={this.onFailure}
                />
            </div>
        );

    return (
        <div className="App">
            {content}
        </div>
    );
}
}

export default Login