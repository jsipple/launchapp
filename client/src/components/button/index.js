import React, { Component } from 'react';
import axios from 'axios';
import "./style.css";

class FollowButton extends Component {

    handleLaunch = (data, userId) => {

        if(this.props.text === "FOLLOW"){
            axios.post('/api/user/' + userId, data);
        }
        else if(this.props.text === "UNFOLLOW"){
            axios.put('/api/user/' + userId, data)
        }
    }

    render() {
        return (
            <div>
                <button className="btn follow" onClick={() => this.handleLaunch(this.props.launchData, this.props.userId)}>{this.props.text}</button>
            </div>
        );
    }
}

export default FollowButton;