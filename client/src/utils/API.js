import axios from 'axios';

export default {
    getUpcoming: function() {
       return axios.get('https://launchlibrary.net/1.3/launch/next/5')   
    },
    getPast: function(date) {
        return axios.get('https://launchlibrary.net/1.3/launch/?startdate=' + date)
    },
    followLaunch: function(data, userId) {
        return axios.post('/api/user/' + userId, data);
    },
    unfollowLaucnh: function(data, userId) {
        return axios.put('/api/user' + userId, data)
    }
}