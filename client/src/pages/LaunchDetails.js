import React, { Component } from 'react';
import Template from '../components/template/template.wrapper';
import LaunchSlider from '../components/LaunchSlider/LaunchSlider';
import ArticleList from '../components/ArticleList';
import { connect } from 'react-redux';
import Articles from '../components/articles/Articles';
import { showButtons } from '../actions/showButtons';
import { bindActionCreators } from 'redux';

class LaunchDetails extends Component {
   launch = this.props.appState.currentLaunch[0];

   
   componentDidMount() {
      this.props.showButtons(false)
   }
   

   render() {
      return (
         <Template>
            <Articles name={this.launch.rocket} />
         <LaunchSlider launch={this.launch} />
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
