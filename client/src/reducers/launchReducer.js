import { ADD_LAUNCH } from '../actions/addAction';
import { REMOVE_LAUNCH } from '../actions/addAction';
import { UPDATE_LAUNCH } from '../actions/addAction';

const initialState = {
    launch: []
};

const launchReducer = (state = initialState, action) => {
    switch (action.type) {
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
                        rocket = rocket
                    }
                    rocket = rocket
                })
            }
    }
};

export default launchReducer;