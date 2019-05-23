import React from 'react';
import Template from '../components/template/template.wrapper';
import { connect } from 'react-redux';
import UpcomingLaunches from '../components/launches/Launches'

const MyLaunches = (props) => {
    return (
            <UpcomingLaunches launches={props.appState.favoriteLaunches}/>
    );
}
const mapStateToProps = state => ({
  appState: state
});

export default connect(mapStateToProps)(MyLaunches);