import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// import axios from 'axios';

import App from './components/App/App';
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';

function* addNew(action){
    try{
        const serverResponse = yield axios.post('/api/koala',action.payload);
        const nextAction ={type:'GET_KOALAS', payload:serverResponse.data};
        yield put(nextAction);
    }catch(error){
        console.log(error,'in post New Koala saga');
    }
}

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
