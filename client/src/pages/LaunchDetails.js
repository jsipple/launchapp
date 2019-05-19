import React from 'react';
import Template from '../components/template/template.wrapper';
import LaunchSlider from '../components/LaunchSlider/LaunchSlider';
import ArticleList from '../components/ArticleList';
import { connect } from 'react-redux';
import Articles from '../components/articles/Articles'

const LaunchDetails = (props)=> {
    console.log(props.appState.launches);
    const launch = props.appState.launches[0];
    console.log(launch.rocket);
    return (
       <Template>
          <Articles name={launch.rocket} />
       <LaunchSlider launch={launch} />
       <ArticleList />
       </Template>

    )
}
const mapStateToProps = state => ({
    appState: state
  });
export default connect(mapStateToProps)(LaunchDetails);