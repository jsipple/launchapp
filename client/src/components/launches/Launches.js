import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Launches.css'
import axios from 'axios'

class Launches extends Component {
    constructor(props) {
        super()
        this.state = {
            launchesData: []
        }
    }
    componentDidMount = () => {
        axios.get('https://launchlibrary.net/1.3/launch/next/5')
            .then(res => {
                console.log(res)
                this.setState({
                    launchesData: res.data.launches
                })
                console.log(res.data.launches)
                for (let i = 0; i < res.data.launches.length; i++) {
                console.log(res.data.launches[i])
                }
            })
    }
render() {
    let image = this.state.launchesData.map( (x, i) => {
    return (
    <div>
        <img className='rocket' src={this.state.launchesData[i].rocket.imageURL} alt='image' />
            <h1>{this.state.launchesData[i].name}</h1>
            {/* should we have this be a link to their website? */}
                <p>made by {this.state.launchesData[i].rocket.agencies[0].name}</p>
                <p>{(this.state.launchesData[i].missions[0] !== undefined) ? this.state.launchesData[i].missions[0].description : 'no details at this time'}</p> 
                <p>set to launch from {this.state.launchesData[i].location.name} on {this.state.launchesData[i].windowend}</p>
                <p>see video below</p>
                {/* doesn't look like the below works might need to look at this for only the ones that have finished or are close(might start livestream early could also make this open the link in a new tab(we get a watch link not an embeded one)) */}
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/?v=21X5lGlDOfg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        <hr />
    </div>
    )})
    // this.launches.map((x, i) => <div><h1>{this.state.launchesData.name}</h1></div>)
 return(
  <Fragment>
   <div>launch component</div>
   {image}
  </Fragment>
 )
 }
}

export default Launches