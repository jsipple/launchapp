import { ADD_LAUNCH } from '../actions/addAction';
import { REMOVE_LAUNCH } from '../actions/removeAction';
import { UPDATE_LAUNCH } from '../actions/updateAction';
import { SET_VIEW } from '../actions/setView';

const initialState = {
    isAuthenticated: false,
    launchView: 'list',
    profileImage: '',
    favoriteLaunches: [],
    launches: []
};

const launchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_VIEW:
            return {
                ...state, 
                launchView: state.launchView === 'list' ? 'slider' : 'list'
            }
        case ADD_LAUNCH:
            return {
                ...state,
                launch: state.launch.concat(action.launch)
            }
        case REMOVE_LAUNCH:
            return {
                ...state,
                launch: state.launch.filter(rocket => rocket !== state.launch[action.idx])
            }
        case UPDATE_LAUNCH:
            return {
                ...state,
                launch: state.launch.map(rocket => {
                    if (rocket === state.launch[action.idx]) {
                        rocket = 'test'
                    }
                    return rocket;
                })
            }
        default:
            return state
    }
};

export default launchReducer;