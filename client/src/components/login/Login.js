import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import TwitterLogin from 'react-twitter-auth';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import ids from './keys'

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
    console.log(response.profileObj)
    this.setState({
        user: response.profileObj,
        isAuthenticated: true
      })
    axios.get('/auth/login/google', response )
      .then(res => {
        // same as below
        console.log(res)
        console.log('added to mongodb')
      })
  }
  // says needs to be https for this to run what do i need to do
  facebookResponse = (response) => {
    console.log(response.name)
    // if (response.name !== undefined) {
    this.setState({
        user: response,
        isAuthenticated: true
      })
    // }
    axios.get('/auth/login/facebook', response)
      .then(res => {
        // being sent full file not sure if this is good
        console.log(res)
        console.log('added to mongodb')
      })
  }
  twitterResponse = (response) => {
    console.log(response)
    // axios.get('/auth/login/twitter', response)
    //   .then(res => {
    //     console.log('added to mongodb')
    //   })
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
  handleFailure = () => {
    console.log('a')
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
                <TwitterLogin 
                loginUrl="localhost:8080/auth/twitter"         
                onFailure={this.handleFailure}            
                onSuccess={this.twitterResponse}
                // issue with request token url
                requestTokenUrl="http://localhost:8080/auth/twitter/callback"
                />
                <FacebookLogin
                    appId='386466931941979'
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={this.facebookResponse}
                    reAuthenticate={true}
                    onFailure={this.onFailure}
                     />
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