import React, { Component } from 'react';
import axios from 'axios';
import "./style.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { favoriteAction } from '../../actions/favoriteAction'
// need to send redux here or send data from launchSlider

class RoundFollow extends Component {
    state={
        following: false
    }
    componentDidMount () {
        if(this.props.appState.userData[0].favLaunches.map(launch => launch.id).indexOf(this.props.id) >= 0) {
            this.setState({
                following: true
            })
        }
    }
    handleLaunch = () => {
        let userId = this.props.appState.userData[0].email
        let data = this.props.launch
        let favLaunches = this.props.appState.userData[0].favLaunches
        if(favLaunches.map(launch => launch.id).indexOf(this.props.id) === -1 ){
            console.log("ADDING");
            this.setState({
                following:true
            });
            axios.post('/api/launch/' + userId, data).then(result=> 
                console.log("ADD RESULT", result)
            );

            this.props.favoriteAction(data);
            
        } else if(favLaunches.map(launch => launch.id).indexOf(this.props.id) >= 0) {
            console.log("REMOVING");
            this.setState({
                following: false
            });
            axios.put('/api/launch/delete/' + userId, data).then(result=> 
                console.log("DELETE RESULT", result)
            );
            
        }
    }
    

    render() {
        console.log(this.props.id);
        console.log(this.props.appState.userData[0].favLaunches)
        return (
            <div>
                <button id='test' className="btn round-follow" onClick={this.handleLaunch}>
                 {this.state.following ? <span>&#10003; Following</span> : <span>  Follow</span>  }
                 </button>
            </div>
        );
    }
}

const mapStateToProps = state => ({appState: state});
const mapDispatchToProps = dispatch => {
    return bindActionCreators({favoriteAction}, dispatch);
  }
export default connect(mapStateToProps, mapDispatchToProps)(RoundFollow);