import { ADD_LAUNCH } from '../actions/addAction';
import { REMOVE_LAUNCH } from '../actions/removeAction';
import { UPDATE_LAUNCH } from '../actions/updateAction';
import { SET_VIEW } from '../actions/setView';
import { INCREMENT_INDEX, DECREMENT_INDEX } from '../actions/indexActions';

const initialState = {
    isAuthenticated: false,
    launchView: 'list',
    profileImage: '',
    favoriteLaunches: [],
    launches: [],
    index: 0
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
                launch: state.launches.push(action.launch)
            }
        case INCREMENT_INDEX:
            return {
                ...state,
                index: state.index += 1
            }
        case DECREMENT_INDEX:
            return {
                ...state,
                index: state.index -= 1
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