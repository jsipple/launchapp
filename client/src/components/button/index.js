import React, { Component } from 'react';
import axios from 'axios';
import "./style.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFavorite } from '../../actions/addFavorite'
import { removeFavorite } from '../../actions/removeFavorite'
// need to send redux here or send data from launchSlider

class FollowButton extends Component {

    handleLaunch = (e) => {
        let data = this.props.launch
        console.log(data)
        let userId = this.props.appState.userData[0].email
        if(e.target.textContent === "Follow"){
            // not sure why this is not working
            this.props.addFavorite(data)

            axios.post('/api/launch/' + userId, data)
                .then(res => {
                    console.log(res)
                })
            e.target.textContent = 'Unfollow'
        }
        else if(e.target.textContent === "Unfollow"){
            axios.put('/api/launch/delete/' + userId, data)
            e.target.textContent = 'Follow'
            this.props.removeFavorite(data)
        }
    }

    render() {
        return (
            <div>
                {/* on my launches page have in issue with the button below it changing to follow */}
                <button id='test' className="btn follow" onClick={this.handleLaunch}>{this.props.appState.favoriteLaunches.map(e => e.id).indexOf(this.props.id) === -1 ? 'Follow' : 'Unfollow'}</button>
            </div>
        );
    }
}

const mapStateToProps = state => ({appState: state});
const mapDispatchToProps = dispatch => {
    return bindActionCreators({addFavorite, removeFavorite}, dispatch);
  }
export default connect(mapStateToProps, mapDispatchToProps)(FollowButton);