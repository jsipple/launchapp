import React, { Component } from 'react'
import { Button } from 'react-bootstrap';
import { bindActionCreators } from 'redux';
import { setView } from '../../actions/setView';
import { connect } from 'react-redux';

class TestComponent extends Component {
    constructor(props) {
        super(props)
    }

    changeView = () => {
        this.props.setView();
    }


  render() {
    return (
      <div>
        <p>Test component works</p>
        <Button onClick={this.changeView}>Click Me</Button>
      </div>
    )
  }
}

const mapStateToProps = state => state;


const mapDispatchToProps = dispatch => {
    return bindActionCreators({ setView }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TestComponent);

