import React, { Component } from 'react';
import axios from 'axios';
import "./style.css";

class Button extends Component {

    addLaunch = (data, userId) => {
        axios.post('/api/user/' + userId, data);
    }

    render() {
        return (
            <div>
                <button className="btn follow" onClick={() => this.addLaunch(this.props.launchData, this.props.userId)}>{this.props.text}</button>
            </div>
        );
    }
}

export default Button;