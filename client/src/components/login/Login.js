import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import ids from './keys'
import { MDBIcon, MDBContainer, MDBBtn } from 'mdbreact';
import SocialMediaIcons from 'react-social-media-icons';
import './login.css'


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
  guestLogin = () => {
    this.setState({
      isAuthenticated: true
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
  
  onFailure = error => {
    alert(error)
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
            <div className='login'>
                <FacebookLogin
                    appId='386466931941979'
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={this.facebookResponse}
                    reAuthenticate={true}
                    onFailure={this.onFailure}
                    size='small'
                    icon="fa-facebook"
                     />
                     <div className='google'>
                <GoogleLogin
                    clientId={ids.google.clientID}
                    icon={true}
                    // option if we just want icon
                    // render={renderProps => (
                    //   <img src="https://img.icons8.com/color/96/000000/google-logo.png" />
                    // )}
                    style='margin: 10px'
                    onSuccess={this.googleResponse}
                    onFailure={this.onFailure}
                />
                </div>
                <div>
                  <button className='guest' onClick={this.guestLogin}>continue as guest &#8594;</button>
                </div>
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