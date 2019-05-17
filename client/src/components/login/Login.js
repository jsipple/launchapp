import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios'
import TwitterLogin from 'react-twitter-auth';
import FacebookLogin from 'react-facebook-login';
import { GoogleLogin } from 'react-google-login';
import ids from './keys'
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
    user: null,
    token: ''
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
    this.setState({
        user: response.profileObj,
        isAuthenticated: true
      })
    API.addUser(userData);
    this.props.addUser(userData);

    this.props.history.push('/home')

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
                <TwitterLogin loginUrl="localhost:3001/login/twitter"
                               onFailure={this.twitterResponse} onSuccess={this.twitterResponse}
                               requestTokenUrl="http://localhost:3001/auth/twitter/redirect"/>
                <FacebookLogin
                    appId='386466931941979'
                    autoLoad={true}
                    fields="name,email,picture"
                    callback={this.facebookResponse}
                    reAuthenticate={true}
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

const mapStateToProps = state => state;


const mapDispatchToProps = dispatch => {
  return bindActionCreators({addUser}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login))