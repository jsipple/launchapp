
import React, { Component } from 'react';
import Template from '../components/template/template.wrapper';
import { connect } from 'react-redux';
import { showButtons } from '../actions/showButtons';
import { bindActionCreators } from 'redux';
import profileImage from "../images/profilePlaceholder.png"
import "./profile.css"

    
class Profile extends Component {
    userData = this.props.appState.userData[0];

    componentDidMount() {
      this.props.showButtons(false)
     }

     render() {
      return (
       
          <Template>
          {/* look into making a default avatar if nothing in the system */}
          <div className="profile-card">
              <p className="profile-title">PROFILE</p>

              <img alt="Guest" id='profileImg' src={this.userData.imageUrl ? this.userData.imageUrl : profileImage}/>

              <p className="username">{this.userData.name}</p>
              <p className="email">{this.userData.email}</p>
              <div className="row preference">
                <div className="col">
                    <p className="preference-text">Home Screen Preference:</p>
                </div>
                <div className="col">
                    <select className="select-home">
                    <option>Home</option>
                    <option>Launches</option>
                    <option>Organizations</option>
                    </select>
                </div>
          </div>
          </div>
        </Template>
       
       )
     }
    }

const mapStateToProps = state => ({
      appState: state
    });

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
      showButtons
    }, dispatch)
};
  
  export default connect(mapStateToProps, mapDispatchToProps)(Profile);