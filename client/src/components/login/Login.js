import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
// using socket so probably don't need axios
import axios from 'axios'
import OAuth from './OAuth'
import io from 'socket.io-client'
import { APIurls } from './APIurls'
const thirdPartyOauthList = ['twitter', 'google', 'facebook']
const socket = io(APIurls)

class Login extends Component {
  // need to save this state to store as well figure out if i want to use token
  
  render() {
    // let content = this.state.isAuthenticated ?
    //     (
    //         <div>
    //             <p>Authenticated</p>
    //             <div>
    //                 {this.state.user.email}
    //             </div>
    //             <div>
    //                 <button onClick={this.handleLogout} className="button">
    //                     Log out
    //                 </button>
    //             </div>
    //         </div>
    //     ) :
    //     (
    //         <div>
    //             <TwitterLogin loginUrl="localhost:3001/login/twitter"
    //                            onFailure={this.twitterResponse} onSuccess={this.twitterResponse}
    //                            requestTokenUrl="http://localhost:3001/auth/twitter/redirect"/>
    //             <FacebookLogin
    //                 appId='386466931941979'
    //                 autoLoad={true}
    //                 fields="name,email,picture"
    //                 callback={this.facebookResponse}
    //                 reAuthenticate={true}
    //                  />
    //             <GoogleLogin
    //                 clientId={ids.google.clientID}
    //                 buttonText="Login"
    //                 onSuccess={this.googleResponse}
    //                 onFailure={this.onFailure}
    //             />
    //         </div>
    //     );

    return (
        <div className={'wrapper'}>
        <div className={'container'}>
          {thirdPartyOauthList.map(provider => 
            <OAuth 
              provider={provider}
              key={provider}
              socket={socket}
            />
          )}
        </div>
        </div>
    );
}
}

export default Login