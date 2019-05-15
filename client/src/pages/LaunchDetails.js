import React from 'react';
import Template from '../components/template/template.wrapper';
import LaunchSlider from '../components/LaunchSlider';
import { connect } from 'react-redux';


const LaunchDetails = (props)=> {
    console.log(props.state.launches);
    const launch = props.state.launches[0];
    return (
       <Template>
           
       <LaunchSlider launch={launch} />
       </Template>

    )
}
const mapStateToProps = state => ({
    appState: state
  });
export default connect(mapStateToProps)(LaunchDetails);