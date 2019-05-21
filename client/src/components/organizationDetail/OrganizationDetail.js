import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './OrganizationDetail.css'
import API from '../../utils/API'
import wiki from 'wikijs'
import { SocialIcon } from 'react-social-icons';
import NASA from '../../images/nasa.png'
import { connect } from 'react-redux';

// issue with going to this taking out some state
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
  let urls = []
  API.getAgency(this.props.abbv)
   .then(res => {
    console.log(res)
    res.data.agencies[0].infoURLs.forEach((element) => {
      // this.urls.push(element)
      urls.push(element)
    })
    wiki({ apiUrl: 'https://en.wikipedia.org/w/api.php' })
    .page(this.props.agency)
    .then(page => page.summary())
    .then(res => {
      this.setState({
        summary: res
      })
    });
    this.setState({
      urls,
      country: res.data.agencies[0].countryCode, 
      name: res.data.agencies[0].name
    })
   })
 }
render() {
  console.log(this.state.urls)
  let links = this.state.urls.map( (x,i) => <SocialIcon className='icon' url={x} target='_blank' />)
 return(
  <div className='wrapper-org'>
  <h1>{this.state.name.toUpperCase()}</h1>
  <img className='logo' alt='nasa' src={NASA} />
  <hr />
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{this.state.summary}
   <br />
   <br />
   {links}
  </div>
 )
 }
}

const mapStateToProps = state => ({
  appState: state
});

export default connect(mapStateToProps)(OrganizationDetail)