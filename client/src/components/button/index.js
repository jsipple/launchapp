import React, { Component } from 'react';
import axios from 'axios';
import "./style.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { favoriteAction } from '../../actions/favoriteAction'
// need to send redux here or send data from launchSlider

class FollowButton extends Component {

    handleLaunch = (e) => {
        let data = this.props.launch
        console.log(data)
        let userId = this.props.appState.userData[0].email
        if(e.target.textContent === "Follow"){
            axios.post('/api/launch/' + userId, data);
            e.target.textContent = 'Unfollow'
            this.props.favoriteAction(data)
        }
        else if(e.target.textContent === "Unfollow"){
            axios.put('/api/launch/delete/' + userId, data)
            e.target.textContent = 'Follow'
        }
    }

    render() {
        return (
            <div>
                <button id='test' className="btn follow" onClick={this.handleLaunch}>{this.props.appState.userData[0].favLaunches.map(e => e.id).indexOf(this.props.id) === -1 ? 'Follow' : 'Unfollow'}</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({appState: state});
const mapDispatchToProps = dispatch => {
    return bindActionCreators({favoriteAction}, dispatch);
  }
export default connect(mapStateToProps, mapDispatchToProps)(FollowButton);