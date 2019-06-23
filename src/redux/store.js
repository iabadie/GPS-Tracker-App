import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import Reactotron from '../app/reactoConfig';

import tracker from './tracker/reducer';

const reducers = combineReducers({
  tracker
});

const middlewares = [];
const enhancers = [];

/* ------------- Thunk Middleware ------------- */
middlewares.push(thunk);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middlewares));
const store = __DEV__
  ? createStore(
      reducers,
      compose(
        ...enhancers,
        Reactotron.createEnhancer()
      )
    )
  : createStore(reducers, compose(...enhancers));

export default store;
