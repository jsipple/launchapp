import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import TwitterLogin from 'react-twitter-auth';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import ids from './keys'
import './login.css'
import { MDBIcon, MDBContainer, MDBBtn } from "mdbreact"
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';


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
    this.setState({
        user: response.profileObj,
        isAuthenticated: true
      })
    axios.get('/auth/login/google', response )
      .then(res => {
        console.log('added to mongodb')
      })
  }
  // says needs to be https for this to run what do i need to do
  facebookResponse = (response) => {
      console.log(response)
    this.setState({
        user: response,
        isAuthenticated: true
      })
    axios.get('/auth/login/facebook', response)
      .then(res => {
        console.log('added to mongodb')
      })
  }
  twitterResponse = (response) => {
    axios.get('/auth/login/twitter', response)
      .then(res => {
        console.log('added to mongodb')
      })
  }
  onFailure = error => {
    alert(`${error} this is what we have to find...`)
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
            <div className='hi'>
                <TwitterLogin loginUrl="localhost:3001/login/twitter"
                               onFailure={this.twitterResponse} onSuccess={this.twitterResponse}
                               showIcon={true}
                               forceLogin={true}
                               text=""
                               requestTokenUrl="http://localhost:3001/auth/twitter/redirect"/>
                               
                <FacebookLogin
                    appId='386466931941979'
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={this.facebookResponse}
                    cssClass="my-facebook-button-class"
                    icon="fa-facebook"
                    reAuthenticate={true}
                     />
                <GoogleLogin
                    // clientId={ids.google.clientID}
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    // buttonText="Login"
                    onSuccess={this.googleResponse}
                    onFailure={this.onFailure}
                    icon={true}
                    />

            </div>
        );


    return (
        <div className="App">
            {content}
            <div className="">
                <span><button class="icon-button">
                <i class="fab fa-google fa-5x"></i></button></span><span><button class="icon-button"><i class="fab fa-facebook-f fa-5x"></i></button></span><span><button><i class="fab fa-twitter fa-5x"></i></button></span>
                <span className='fa fa-twitter'></span>
                <MDBContainer>
                  <MDBBtn size="lg" tag="a" floating social="fb">
                    <MDBIcon fab icon="facebook-f" />
                  </MDBBtn>
                </MDBContainer>
        </div>
        </div>
    );
}
}

export default Login