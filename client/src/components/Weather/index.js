import React, {Component} from 'react';
import API from '../../utils/API';
import getIcon from '../../utils/Icon';

class Weather extends Component {
    state={
        weather: "",
        icon: ""
    }
    componentDidMount() {
        const {lat, long} = this.props
        this.getWeather(lat,long)
    }
    componentDidUpdate() {
        if(this.state.weather.weather && this.state.icon.length ===0) {
            this.handlegetIcon(this.state.weather.weather[0].id)
        }
    }
    getWeather = (lat,long) => {
        console.log("LOCATION",long);
        console.log("LOCATION",lat);

        API.getWeather(lat,long)
        .then(result => {
            console.log(result.data);
            this.setState({
                weather: result.data
            })
        })
        .then(
            console.log("WEATHER", this.state.weather)
            // this.handlegetIcon(this.state.weather.weather[0].id)
        )
        .catch(err => console.log(err))
    }
    handlegetIcon = (id) => {
        this.setState({
            icon: getIcon(`${id}`)
        })
    }
    convertToFarenheit = (temp) => {
        console.log("TEMP", temp);
        const farenheight = (temp - 273.15) * (9/5 )+ 32 
        return farenheight;
    } 
    render() {
        
        const {icon, weather} = this.state
        return (
            <div>
                <p>
                Temperature: {weather.main ? (weather.main.temp) : "loading" }
                </p>
                <i class={`wi ${icon}`}></i>
            </div>
        )
    }
}

export default Weather;