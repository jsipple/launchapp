import React, { Component, Fragment } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './Launches.css'
import API from '../../utils/API';

let search;

class Launches extends Component {
    state = {
            launchesData: [],
            date: ''
        }
    
    componentDidMount = () => {
        console.log(window.location.pathname)
        // using this to grab a year before by default
        let a = new Date().toISOString()
        let past = new Date(new Date().setFullYear(new Date().getFullYear() -1)).toISOString()
        past = past.substring(0, 10)
        this.setState({
            date: past
        });
        console.log(past)
        a = a.substring(0, 10)
        // might do an axios.get of this for rocket details https://launchlibrary.net/1.3/rocket/whateverLooking for
        if (window.location.pathname === '/launches/upcoming') {
            API.getUpcoming()
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
        } else if (window.location.pathname === '/launches/past') {
            this.timedApi(past)
    }

}
timedApi = (date) => {
    console.log(date)
   API.getPast(date)
    .then(res => {
        console.log(res)
        this.setState({
            launchesData: res.data.launches
        })
    })
    } 
    handleChange = (e) => {
        this.setState({
            date: e.target.value
        })
    }
    handleKeyPress = (e) => {
        console.log(e.key)
        if (e.key === 'Enter') {
            console.log('a')
        this.timedApi(this.state.date)
        }
    }
render() {
        search = <input onKeyPress={this.handleKeyPress} onChange={this.handleChange} value={this.state.date} type='date' />

    let image = this.state.launchesData.map( (x, i) => {
   return (<div key={i}>
        {/* <button onClick={this.timedApi(this.state.date)}>click</button> */}
        <img className='rocket' src={this.state.launchesData[i].rocket.imageURL} alt='image' />
            <h1>{this.state.launchesData[i].name}</h1>
            {/* should we have this be a link to their website? */}
                <p>made by {this.state.launchesData[i].rocket.agencies[0].name}</p>
                <p>{(this.state.launchesData[i].missions[0] !== undefined) ? this.state.launchesData[i].missions[0].description : 'no details at this time'}</p> 
                <p>set to launch from {this.state.launchesData[i].location.name} on {this.state.launchesData[i].windowend}</p>
                <p>see video below</p>
                {/* would we want to try and embed this or just link? */}
                {/* doesn't look like the below works might need to look at this for only the ones that have finished or are close(might start livestream early could also make this open the link in a new tab(we get a watch link not an embeded one)) */}
                {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/?v=21X5lGlDOfg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
        <hr />
        </div>
    )})
    // this.launches.map((x, i) => <div><h1>{this.state.launchesData.name}</h1></div>)
 return(
  <Fragment>
   { search }

   {image}
  </Fragment>
 )
 }
}

export default Launches