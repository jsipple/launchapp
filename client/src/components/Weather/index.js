import React, {Component} from 'react';
import API from '../../utils/API';
import getIcon from '../../utils/Icon';

class Weather extends Component {
    state={
        long: "",
        lat: "",
        weather: "",
        icon: "",
        iconUpdated: false
    }
    componentDidMount() {
        let {lat, long} = this.props
        lat = Math.floor(lat*100)/100
        lat = lat.toFixed(2);
        long = Math.floor(long*100)/100
        long = long.toFixed(2);
        this.setState({
            long: long,
            lat: lat
        });
        this.getWeather(lat, long)
        
    }
    componentWillReceiveProps(newProps) {
        let {lat,long} =newProps
        lat = Math.floor(lat*100)/100
        lat = lat.toFixed(2);
        long = Math.floor(long*100)/100
        long = long.toFixed(2);
        if(lat !==this.state.lat) {
            this.setState({
                lat: lat,
                long: long,
                iconUpdated: false
            });
            this.getWeather(lat,long)
        }
    }
    componentDidUpdate() {
        // if(this.state.lat.length > 0 && this.state.weather.length !==0 && parseFloat(this.state.lat) !== this.state.weather.coord.lat) {
        //     this.getWeather(this.state.lat,this.state.long)
        // }
        if(this.state.weather.weather && this.state.iconUpdated === false) {
            this.handlegetIcon(this.state.weather.weather[0].id);
            this.setState({iconUpdated: true})
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
        //     .then( function() {
        //         console.log(this.state)
        //         this.handlegetIcon(this.state.weather.weather[0].id)}.bind(this));
        })
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
        console.log(this.state);
        const {icon, weather} = this.state
        this.state.weather.weather ? console.log("ID", this.state.weather.weather[0].id) : console.log("Loading");
        return (
            <div>
                <p>
                Temperature: {weather.main ? (weather.main.temp) : "loading" }
                </p>
                <i className={`wi ${icon}`}></i>
            </div>
        )
    }
}

export default Weather;