import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// import axios from 'axios';

import App from './components/App/App';
import createSagaMiddleware from 'redux-saga';
// import { takeEvery, put } from 'redux-saga/effects';

const employees = (state = [], action) => {
    if (action.type === 'SET_EMPLOYEES'){
        return action.payload
    }
    return state;
}








const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        employees,
    }),
    applyMiddleware(sagaMiddleware, logger),

);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
