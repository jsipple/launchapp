import React, { Component,Fragment } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import FacebookLogin from 'react-facebook-login';
import TwitterLogin from 'react-twitter-auth';
import {GoogleAPI, GoogleLogin, GoogleLogout } from 'react-google-oauth'

import './Home.css'

let componentClicked
const responseFacebook = (response) => {
    console.log(response);
  }
const googleResponse = res => {
    console.log(res)
}
const googlefailure = res => {
    console.log('falied')
}
const twitterResponse = res => {
    console.log(res)
}
class Home extends Component {
 render() {
  return (
   <Fragment>
    <div>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
    <GoogleAPI clientId="859211818646-ums20503fv8se7vkf0g49ls3kd85132s.apps.googleusercontent.com"
            onUpdateSigninStatus={googleResponse}
            onInitFailure={googlefailure} >
            <div>
    <GoogleLogin />
    <GoogleLogout />
    </div>
    </GoogleAPI>
          <FacebookLogin
    appId="386466931941979"
    autoLoad={true}
    fields="name,email,picture"
    onClick={componentClicked}
    callback={responseFacebook} />
    <TwitterLogin
    // need to figure out what to put for website
  loginUrl="http://localhost:4000/api/v1/auth/twitter"
  onFailure={twitterResponse}
  onSuccess={twitterResponse}
  requestTokenUrl="http://localhost:4000/api/v1/auth/twitter/reverse"
/>
    </div>
   </Fragment>
  )
 }
}

export default Home