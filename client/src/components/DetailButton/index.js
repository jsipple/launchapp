import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import "./style.css";
import { getCurrentLaunch } from '../../actions/currentLaunch';
import { withRouter } from "react-router";


class DetailButton extends Component {
    handleDetailClick = (index) => {
        console.log(index);
        this.props.getCurrentLaunch(index);
        
        this.props.history.push('/launches/details')
        
        
      }
    render() {
        const {index} = this.props
        return (
            <div>
                <button className="btn details" onClick={()=>this.handleDetailClick(index)}>Details</button>
            </div>
        );
    }
    
}
const mapStateToProps = state => ({
    appState: state
  });
  
  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ getCurrentLaunch }, dispatch);
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(withRouter(DetailButton));
