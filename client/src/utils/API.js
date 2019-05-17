import axios from 'axios';

export default {
    getUpcoming: function() {
       return axios.get('https://launchlibrary.net/1.3/launch/next/25')   
    },
    getPast: function(date) {
        return axios.get('https://launchlibrary.net/1.3/launch/?startdate=' + date)
    },
    followLaunch: function(data, userId) {
        return axios.post('/api/user/' + userId, data);
    },
    unfollowLaunch: function(data, userId) {
        return axios.put('/api/user/' + userId, data)
    },
    addUserImg: function(data, userId){
        return axios.put('/api/user/image/' + userId, data);
    },
    getWeather: function(location) {
        return axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=4b44d2c426126fc0555255fea24e6c5a`)
    }
}