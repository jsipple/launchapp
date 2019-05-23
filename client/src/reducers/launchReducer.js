import { ADD_LAUNCH } from '../actions/addAction';
import { REMOVE_LAUNCH } from '../actions/removeAction';
import { UPDATE_LAUNCH } from '../actions/updateAction';
import { SET_VIEW } from '../actions/setView';
import { SET_CURRENT } from '../actions/currentLaunch';
import { ADD_USER } from '../actions/addUserAction';
import { FAVORITE_LAUNCH } from '../actions/favoriteAction'
import { CLEAR_LAUNCHES } from '../actions/clearLaunches';
import { SHOW_BUTTONS } from '../actions/showButtons';
import { REMOVE_FAVORITE } from '../actions/removeFavorite';
import { ADD_FAVORITE } from '../actions/addFavorite';
import { ADD_AGENCY } from '../actions/agencyName'
import { CLEAR_FAVORITES } from '../actions/clearFavorites'

const initialState = {
    isAuthenticated: false,
    launchView: 'list',
    profileImage: '',
    favoriteLaunches: [],
    launches: [],
    currentLaunch: [],
    userData: [],
    showButtons: true,
    abbv: '',
    agency: '',
    image: ''
};

const launchReducer = (state = initialState, action) => {
    console.log(action.type)
    switch (action.type) {
        case SET_VIEW:
            return {
                ...state, 
                launchView: state.launchView === 'list' ? 'slider' : 'list'
            }
        case ADD_USER:
            return {
                ...state,
                userData: state.userData.concat(action.user)
            }
        case SET_CURRENT:
            return {
                ...state,
                currentLaunch: [action.launch]
            }
        case SHOW_BUTTONS:
            return {
                ...state,
                showButtons: action.show
            }
        case ADD_LAUNCH:
            return {
                ...state,
                launch: state.launches.push(action.launch)
            }
        case CLEAR_LAUNCHES:
            return {
                ...state,
                launches: []
            }
        case REMOVE_LAUNCH:
            return {
                ...state,
                launches: state.launches.filter(rocket => rocket !== state.launch[action.idx])
            }
        case UPDATE_LAUNCH:
            return {
                ...state,
                launches: state.launches.map(rocket => {
                    if (rocket === state.launches[action.idx]) {
                        rocket = 'test'
                    }
                    return rocket;
                })
            }
        case FAVORITE_LAUNCH:
            return {
                ...state,
                favoriteLaunches: state.favoriteLaunches.concat(action.launch)
            }
        case ADD_FAVORITE:
        return {
            ...state,
            favoriteLaunches: [...state.favoriteLaunches, action.launch]
        }
        case REMOVE_FAVORITE:
        let a = state.favoriteLaunches.filter(rocket => {
             return rocket.id !== action.launch.id
        })
            return {
                ...state,
                favoriteLaunches: a
            }
        case ADD_AGENCY:
            return {
                ...state,
                agency: action.agency,
                abbv: action.abbv,
                image: action.image
            }
        case CLEAR_FAVORITES:
            console.log('testing')
            return {
                ...state,
                favoriteLaunches: []
            }
        default:
            return state
    }
};

export default launchReducer;