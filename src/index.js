import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// import axios from 'axios';

import App from './components/App/App';
import createSagaMiddleware from 'redux-saga';
// import { takeEvery, put } from 'redux-saga/effects';

function* rootSaga(){
    yield takeEvery('GET_KOALAS', getKoalas)

}
function* getKoalas() {
    try{
        const serverResponse = yield axios.get('/api/koala');
        const nextAction = {type: 'SET_KOALAS', payload: serverResponse.data}
        yield put(nextAction)
    }catch(error){
        console.log('in getKoalas error', error);
        
    }
}
const koalas = (state = [], action) => {
    if (action.type === 'SET_KOALAS'){
        return action.payload
    }
    return state;
}

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers({
        koalas,
    }),
    applyMiddleware(sagaMiddleware, logger),

);
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('react-root'));
