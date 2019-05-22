import React from 'react';
import Template from '../components/template/template.wrapper';
import { connect } from 'react-redux';
import UpcomingLaunches from '../components/launches/Launches'

const Home = (props) => {
    return (
            <UpcomingLaunches launches={props.appState.launches}/>
    );
}
const mapStateToProps = state => ({
  appState: state
});

export default connect(mapStateToProps)(Home);