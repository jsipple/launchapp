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
  console.log(this.props.appState.abbv)
  console.log(this.props.appState.agency)
  API.getAgency(this.props.appState.abbv)
   .then(res => {
    console.log(res)
    if (res.data.agencies.length > 0) {
    res.data.agencies[0].infoURLs.forEach((element) => {
      // this.urls.push(element)
      urls.push(element)
      this.setState({
        urls,
        country: res.data.agencies[0].countryCode
      })
    })
  }
    wiki({ apiUrl: 'https://en.wikipedia.org/w/api.php' })
    .page(this.props.appState.agency)
    .then(page => page.summary())
    .then(res => {
      console.log(res)
        this.setState({
        summary: res
      })
    });
    this.setState({
      name: this.props.appState.agency
    })
   })
 }
render() {
  let links = this.state.urls.map( (x,i) => <SocialIcon className='icon' url={x} target='_blank' />)
 return(
  <div className='wrapper-org'>
  <h1>{this.state.name.toUpperCase()}</h1>
  <img className={this.props.appState.abbv} alt={this.props.appState.agency} src={`${this.props.appState.image[this.props.appState.abbv]}`} />
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