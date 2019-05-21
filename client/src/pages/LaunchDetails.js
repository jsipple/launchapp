import React from 'react';
import Template from '../components/template/template.wrapper';
import DetailView from '../components/DetailView';
import ArticleList from '../components/ArticleList';
import { connect } from 'react-redux';
import Articles from '../components/articles/Articles'

const LaunchDetails = (props)=> {
        const launch = props.appState.currentLaunch[0];
    return (
       <Template>
          
       <DetailView />
       <Articles name={launch.rocket} />
       </Template>

    )
}
const mapStateToProps = state => ({
    appState: state
  });
export default connect(mapStateToProps)(LaunchDetails);
