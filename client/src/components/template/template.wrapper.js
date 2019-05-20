import React, { Component } from 'react'
import { Navbar, Nav, NavDropdown, Container, Button } from 'react-bootstrap'
import NavbarComponent from '../navbar/Navbar';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setView } from '../../actions/setView';


class Template extends Component {
  constructor(props) {
    super(props)
  }

  handleChangeView = () => {
    console.log('setting view');
    this.props.setView();
  }

  render() {
    const {handleViewChange} = this.props
    return (
      <div>
        <Navbar 
        bg="dark" 
        variant="dark" 
        expand="lg"
        style={{marginBottom: 80}}>
            <Navbar.Brand href="#home"><h4>LaunchVue</h4></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <NavbarComponent />
                </Nav>
                <Button onClick={()=>this.handleChangeView()}>Toggle View</Button>
                {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Carousel View</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.2">List View</NavDropdown.Item>
                </NavDropdown> */}
            </Navbar.Collapse>
        </Navbar>
        <Container className="wrapper"> 
          <section>
            {this.props.children}
          </section>
         </Container>
        <footer className="text-center">
          <Navbar 
          bg="light" 
          variant="dark" 
          expand="lg" 
          fixed="bottom"
          className="text-center"
          >
            
              <span>LaunchVue © 2019</span>
        
          </Navbar>
        </footer>
      </div>
    )
  }
}


const mapStateToProps = state => ({appState: state});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ setView }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Template);