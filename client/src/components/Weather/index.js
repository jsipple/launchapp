import React, {Component} from 'react';
import API from '../../utils/API';
import getIcon from '../../utils/Icon';

class Weather extends Component {
    state={
        weather: "",
        icon: ""
    }
    componentDidMount() {
        this.getWeather(this.props.location.split(","))
    }
    getWeather = (location) => {
        console.log("LOCATION",location)

        API.getWeather(location[0])
        .then(result => {
            console.log(result);
            this.setState({
                weather: result
            })
        })
        // .then(
        //     this.handlegetIcon(this.state.weather.weather.description)
        // )
        .catch(err => console.log(err))
    }
    handlegetIcon = (desc) => {
        const descrip = desc.split(' ').join('-')
        this.setState({
            icon: getIcon(descrip)
        })
    }
    render() {
        const {icon, weather} = this.state
        return (
            <div>
                {/* {weather.main.temp}
                {icon} */}
                Weather
            </div>
        )
    }
}

export default Weather;