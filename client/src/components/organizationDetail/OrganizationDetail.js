import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './OrganizationDetail.css'
import API from '../../utils/API'
import wiki from 'wikijs'
import { SocialIcon } from 'react-social-icons';
import NASA from '../../images/nasa.png'

class OrganizationDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {
      urls: [],
      country: '',
      summary: '',
      name: ''
    }
  }

 componentDidMount = () => {
  let agencyName = window.location.pathname.replace('/organizations/', '')
  console.log(agencyName)
  let urls = []
  API.getAgency(agencyName)
   .then(res => {
    console.log(res)
    res.data.agencies[0].infoURLs.forEach((element) => {
      // this.urls.push(element)
      urls.push(element)
    })
    wiki({ apiUrl: 'https://en.wikipedia.org/w/api.php' })
    .page(agencyName)
    .then(page => page.summary())
    .then(res => {
      this.setState({
        summary: res
      })
    });
    this.setState({
      urls,
      country: res.data.agencies[0].countryCode, 
      name: agencyName
    })
   })
 }
render() {
  console.log(this.state.urls)
  let links = this.state.urls.map( (x,i) => <SocialIcon className='icon' url={x} target='_blank' />)
 return(
  <div className='wrapper'>
  <h1>{this.state.name.toUpperCase()}</h1>
  <img className='logo' alt='nasa' src={NASA} />
  <hr />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.summary}
   <br />
   <br />
   {links}
   <br />
   <br />
   <h2>Upcoming Launches</h2>
  </div>
 )
 }
}

export default OrganizationDetail