import React from 'react';
import Template from '../components/template/template.wrapper';
import { connect } from 'react-redux';
import UpcomingLaunches from '../components/launches/Launches'

const Home = (props) => {
    return (
        <Template>
            Saved Launches
            <UpcomingLaunches launches={props.appState.launches}/>
        </Template>
    );
}
const mapStateToProps = state => ({
  appState: state
});

export default connect(mapStateToProps)(Home);