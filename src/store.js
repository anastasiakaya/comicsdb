import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './reducers';




const logMiddleware = ({ getState }) => (next) => (action) => {
    console.log(action.type, getState());
    return next(action);
  };
  
const stringMiddleware = () => (next) => (action) => {
if (typeof action === 'string') {
    return next({
    type: action
    });
}

return next(action);
};


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(
    applyMiddleware(
        thunkMiddleware, stringMiddleware, logMiddleware)
));
/*
const store = createStore(reducer, applyMiddleware(
    thunkMiddleware, stringMiddleware, logMiddleware));
  
*/





//const store = createStore(reducer);


export default store;
