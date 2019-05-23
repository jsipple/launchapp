import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import launchReducer from '../reducers/launchReducer';


const initialState = {
    isAuthenticated: false,
    launchView: 'list',
    profileImage: '',
    favoriteLaunches: [],
    launches: [],
    index: 0,
    currentLaunch: 0,
    userData: [],
    showButtons: true,
    abbv: '',
    agency: '',
    image: ''
};


const store = createStore(
    launchReducer,
    initialState,
);

export default store;