import React, { Component } from 'react';
import axios from 'axios';
import "./style.css";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFavorite } from '../../actions/addFavorite';
import { removeFavorite } from '../../actions/removeFavorite';
// need to send redux here or send data from launchSlider

class RoundFollow extends Component {
   
    handleLaunch = (e) => {
        let data = this.props.launch
        console.log(data)
        let userId = this.props.appState.userData[0].email
        if(e.target.id === "follow"){
            // not sure why this is not working
            this.props.addFavorite(data)

            axios.post('/api/launch/' + userId, data)
                .then(res => {
                    console.log(res)
                })
           
        }
        else if(e.target.id === "following"){
            axios.put('/api/launch/delete/' + userId, data)
            this.props.removeFavorite(data)
        }
    }
    

    render() {
        const { appState, id } = this.props
        const conditional = appState && appState.favoriteLaunches.find(launch =>  {
            return launch.id === id})
        // const button = !conditional ? '&#10003; Following' : 'Follow'
        return (
            <div>
                {/* on my launches page have in issue with the button below it changing to follow */}
                {conditional ? 
                (<button key={id} id='following' className="btn round-follow" onClick={this.handleLaunch}>&#10003; Following</button>):
                (<button key={id} id='follow' className="btn round-follow" onClick={this.handleLaunch}>Follow</button>)}
            </div>
        );
    }
}

const mapStateToProps = state => ({appState: state});
const mapDispatchToProps = dispatch => {
    return bindActionCreators({addFavorite, removeFavorite}, dispatch);
  }
export default connect(mapStateToProps, mapDispatchToProps)(RoundFollow);