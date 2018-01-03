import { createStore, applyMiddleware } from 'redux';
import dummyReducer from './reducer.js';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';

export default createStore(dummyReducer, applyMiddleware(thunkMiddleware, createLogger()));

