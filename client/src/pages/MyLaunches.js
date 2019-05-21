import React from 'react';
import Template from '../components/template/template.wrapper';
import { connect } from 'react-redux';
import UpcomingLaunches from '../components/launches/Launches'

const MyLaunches = (props) => {
    return (
        <Template>
            Saved Launches
            <UpcomingLaunches launches={props.appState.userData[0].favLaunches}/>
        </Template>
    );
}
const mapStateToProps = state => ({
  appState: state
});

export default connect(mapStateToProps)(MyLaunches);