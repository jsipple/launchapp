
import React, { Component } from 'react';
import Template from '../components/template/template.wrapper';
import DetailView from '../components/DetailView';
import ArticleList from '../components/ArticleList';
import { connect } from 'react-redux';
import Articles from '../components/articles/Articles';
import { showButtons } from '../actions/showButtons';
import { bindActionCreators } from 'redux';
import "./profile.css"

    
class Profile extends Component {
    userData = this.props.appState.userData[0];

    componentDidMount() {
      this.props.showButtons(false)

      console.log(this.image)
     }

     render() {
      return (
       
          <Template>
          {/* look into making a default avatar if nothing in the system */}
          <div className="profile-card">
              <p className="profile-title">PROFILE</p>

              <img alt='profileImg' id='profileImg' src={`${this.userData.imageUrl}`}/>

              <p className="username">{this.userData.name}</p>
              <p className="email">{this.userData.email}</p>
              <div className="row preference">
                <p className="preference-text">Home Screen:</p>
                <select className="select-home">
                <option>Home</option>
                <option>Launches</option>
                <option>Organizations</option>
                </select>
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