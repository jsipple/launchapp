import React from 'react';
import {Template} from '../components/template/template.wrapper'
import API from '../utils/API';
import LaunchSlider from '../components/LaunchSlider';
import Spinner from 'react-bootstrap/Spinner';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';

class Home extends React.Component {
  state ={
    launches: [],
    index: 0
  }
  componentDidMount () {
    console.log("mounted");
    API.getUpcoming()
    .then(result => {
      console.log(result);
      let launches = [];
      
      result.data.launches.forEach(launch => {
        const id = launch.id ? (launch.id): (1)
        const location = launch.location.name ? (launch.location.name) : ("")
        const rocket = launch.rocket.name ? (launch.rocket.name) : ("");
        const date = launch.net ? (launch.net) : ("");
        const timestamp = launch.netstamp ? (launch.netstamp) : ("");
        const company = launch.lsp.name ? (launch.lsp.name) : ("");
        const launchName = (launch.missions.length && launch.missions[0].name) ? (launch.missions[0].name) : ("");
        const type =  (launch.missions.length && launch.missions[0].typeName )? (launch.missions[0].typeName) : ("");
        const image = (launch.rocket.imageURL) ? (launch.rocket.imageURL) : ('./images/ea4078548b2778ad6487e1dfd3d4978fb67cdb2c.png');
        const launchData = {id, image, location, rocket, date, timestamp, company, launchName, type};
        
        console.log("LAUNCHDATA",launchData)
        launches.push(launchData)
      })
      this.setState({
        launches: launches
      })
    })
    .catch(err => console.log(err));
  }
    handleIndexChange = (change) => {
      if(change > 0 && (this.state.index + change) < this.state.launches.length) {
        this.setState({
          index: this.state.index + 1
        })
      }
      if(change < 0 && (this.state.index + change) >= 0) {
        this.setState({
          index: this.state.index -1
        })
      }
      else {
        return false
      }
    }
  render() {
    const {index, launches} = this.state;
    console.log(launches)
    return (
      <Template>
      {launches.length ? 
      
     
        (<LaunchSlider 
        prevDate={((index - 1) >= 0) ? (launches[(index-1)].date): ("none") } 
        launch={launches[index]}
        total={launches.length}
        handleIndexChange = {this.handleIndexChange}
        nextDate={((index + 1 < launches.length)? (launches[(index+1)].date) : ("none"))} 
        />) 
        
        :
        (<Spinner animation="border" role="status">
          <span className="sr-only"> Loading ... </span>
          </Spinner>)}
      </Template>
    );
  }
}


export default Home;

