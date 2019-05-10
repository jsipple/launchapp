import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Navbar.css'
import { Link } from 'react-router-dom'


class Navbar extends Component {
 constructor() {
  super()
  this.state = {
   // this works but might want this state to also effect the amount of space the other component takes up and edit that as well right now it just hides behind nav bar
   showNav: true
  }
 }
 toggleNav = () => {
  this.setState({
   showNav: !this.state.showNav
  })
 }
 render() {
  return (
   <Fragment>
   <div id="mySidenav" className="sidenav" style={{width: this.state.showNav ? '250px' : '0px'}}>
   <Link to="#" className="closebtn" onClick={this.toggleNav}>&times;</Link>
   <Link to="/launches/upcoming">Launches</Link>
   <Link to="/launches/fav">My Launches</Link>
   <Link to="/launches/past">Past Launches</Link>
   <Link to="/organizations">Organizations</Link>
   <Link to="/notifications">Notifications</Link>
   <Link to="/Profile">Profile</Link>
   <Link to="/home">Home</Link>
 </div>
 <span onClick={this.toggleNav}>&#9776; open</span>
           </Fragment>
           )
 }
}

export default Navbar