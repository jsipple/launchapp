import React, { Component } from 'react';
import Template from '../components/template/template.wrapper';
import DetailView from '../components/DetailView';
import ArticleList from '../components/ArticleList';
import { connect } from 'react-redux';
import Articles from '../components/articles/Articles'
import { showButtons } from '../actions/showButtons';
import { bindActionCreators } from 'redux';
import LaunchSlider from '../components/LaunchSlider/LaunchSlider'

class LaunchDetails extends Component {
   launch = this.props.appState.currentLaunch[0];

   componentDidMount() {
      this.props.showButtons(false)
   }

   render(){
    return (
       <Template>
          
       <DetailView />
       <Articles name={this.launch.rocket} />
       </Template>
    )
   }
}
const mapStateToProps = state => ({
    appState: state
  });

const mapDispatchToProps = dispatch => {
   return bindActionCreators({
      showButtons
   }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(LaunchDetails);
