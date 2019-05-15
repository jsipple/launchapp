import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import "./style.css";
import { addLaunch } from '../../actions/addAction';
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router";


class DetailButton extends Component {
    handleDetailClick = (launch) => {
        console.log(launch);
        this.props.addLaunch(launch);
        
        this.props.history.push('/launches/details')
        
        
      }
    render() {
      console.log('PROPS ', this.props)
        const {launch} = this.props
        return (
            <div>
                <button className="btn details" onClick={()=>this.handleDetailClick(launch)}>Details</button>
            </div>
        );
    }
    
}
const mapStateToProps = state => ({
    appState: state
  });
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ addLaunch }, dispatch);
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailButton));
