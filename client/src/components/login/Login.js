import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import ids from './keys'
import './login.css'

import API from '../../utils/API';
import { connect } from 'react-redux';
import { addUser } from '../../actions/addUserAction';
import { bindActionCreators } from 'redux';
import { withRouter } from "react-router";

class Login extends Component {
  // need to save this state to store as well figure out if i want to use token
  constructor(props) {
    super(props)
  }
  state = {
    isAuthenticated: false,
    email: undefined
  }
  handleLogout = () => {
    this.setState({
      isAuthenticated: false,
      user: null,
      token: ''
    })
  }
  // this is working
  googleResponse = (response) => {
    const userData = response.profileObj;
    console.log(userData)
    this.setState({
        user: response.profileObj,
        isAuthenticated: true
      })
    API.addUser(userData)
      .then(res => {
        console.log('test')
    this.props.addUser(res.data);
    this.props.history.push('/home')
      })



  }
  guestLogin = () => {
    this.setState({
      isAuthenticated: true
    })
    this.props.addUser({
      name: 'guest',
      favLaunches: []
    })
    this.props.history.push('/home')
  }
  // says needs to be https for this to run what do i need to do
  facebookResponse = (response) => {
    console.log(response)
    const userData = {
      name: response.name,
      email: response.email,
      image: response.picture.data.url
    }
    // if (response.name !== undefined) {
    this.setState({
        isAuthenticated: true
      })
      API.addUser(userData)
      .then(res => {
        console.log('test')
    this.props.addUser(res.data);
      })
      this.props.history.push('/home')
    // }
  }
  
  onFailure = error => {
    console.log(error)
  }
  render() {
    let content =
        (
            <div className='login'>
                <FacebookLogin
                    appId='386466931941979'
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={this.facebookResponse}
                    cssClass="my-facebook-button-class"
                    icon="fa-facebook"
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

const mapStateToProps = state => state;


const mapDispatchToProps = dispatch => {
  return bindActionCreators({addUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))
