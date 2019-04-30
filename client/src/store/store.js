import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import launchReducer from '../reducers/launchReducer';


const initialState = {
    launches: []
};

const middleware = [thunk];
const allEnhancers = compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.____REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(
    launchReducer,
    initialState,
    allEnhancers
);

export default store;