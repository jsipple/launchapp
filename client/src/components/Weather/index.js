import React, {Component} from 'react';
import API from '../../utils/API';
import getIcon from '../../utils/Icon';
import "./style.css";

class Weather extends Component {
    state={
        long: "",
        lat: "",
        weather: "",
        icon: "",
        iconUpdated: false,
        temperature: ""
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
                iconUpdated: true
            });
            this.getWeather(lat,long)
        }
    }
    componentDidUpdate() { 
        if(this.state.weather.weather && this.state.iconUpdated === false) {
            const farenheight = this.convertToFarenheit(this.state.weather.main.temp);
            this.handlegetIcon(this.state.weather.weather[0].id);
            this.setState({
                iconUpdated: true,
                temperature: farenheight
            })
        } 
        }
    getWeather = (lat,long) => {

        API.getWeather(lat,long)
        .then(result => {
            this.setState({
                weather: result.data,
                iconUpdated: false
            })
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
        let farenheight = ((parseFloat(temp) - 273.15) * (9/5 ))+ 32 ;
        farenheight = parseInt(farenheight);
        return farenheight;
    } 
    render() {
        const {icon, weather, temperature} = this.state
        return (
            <div className="weather">
                <span className="circle"><i className={`wi ${icon}`}></i></span>
            
                {weather.main ? <span className="circle">{temperature}&#176;</span> : "loading" }
            
            </div>
        )
    }
}

export default Weather;