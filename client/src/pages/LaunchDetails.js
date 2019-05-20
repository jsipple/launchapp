import React from 'react';
import Template from '../components/template/template.wrapper';
import LaunchSlider from '../components/LaunchSlider/LaunchSlider';
import ArticleList from '../components/ArticleList';
import { connect } from 'react-redux';


const LaunchDetails = (props)=> {
    console.log(props.appState.currentLaunch);
    const launch = props.appState.currentLaunch[0];
    console.log(launch);
    return (
       <Template>
           
       <LaunchSlider launch={launch} />
       <ArticleList />
       </Template>

    )
}
const mapStateToProps = state => ({
    appState: state
  });
export default connect(mapStateToProps)(LaunchDetails);