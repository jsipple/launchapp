import React from 'react';
import Template from '../components/template/template.wrapper';
import LaunchSlider from '../components/LaunchSlider';
import { connect } from 'react-redux';


const LaunchDetails = (props)=> {
    console.log(props.appState.launches);
    const launch = props.appState.launches[0];
    console.log(launch);
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