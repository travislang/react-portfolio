import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
// Provider is needed to use redux
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, call, put } from 'redux-saga/effects';



//generator function to fetch projects drom db
function* fetchProjects() {
    const projects = yield call(axios.get, '/projects')
    yield put({type: 'SET_PROJECTS', payload: projects.data})
}
//saga to async get tags from db
function* fetchTags() {
    const tags = yield call(axios.get, '/tags')
    yield put({type: 'SET_TAGS', payload: tags.data})
}
//saga for deleting projects from admin page
function* deleteProject(action) {
    yield call(axios.delete, `/projects/${action.payload}`)
    yield put({type: 'FETCH_PROJECTS'})
}

function* addProject(action) {
    try {
        yield call(axios.post, '/projects', action.payload)
        yield put({ type: 'FETCH_PROJECTS' })
        yield put({type: 'NOTIFICATION_SUCCESS'})
    } catch (err) {
        console.log('error in addproject saga:', err)
        yield put({ type: 'NOTIFICATION_ERROR' })
    }
    
}


// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_PROJECTS', fetchProjects);
    yield takeEvery('FETCH_TAGS', fetchTags);
    yield takeEvery('DELETE_PROJECT', deleteProject);
    yield takeEvery('ADD_PROJECT', addProject);
}



// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

// Used to store projects returned from the server
const projects = (state = [], action) => {
    switch (action.type) {
        case 'SET_PROJECTS':
            return action.payload;
        default:
            return state;
    }
}

// Used to store the project tags (e.g. 'React', 'jQuery', 'Angular', 'Node.js')
const tags = (state = [], action) => {
    switch (action.type) {
        case 'SET_TAGS':
            return action.payload;
        default:
            return state;
    }
}

  //sets a state to keep track of the page view
const page = (state = 0, action ) => {
    switch (action.type) {
        case 'CHANGE_PAGE':
            return !state;
        default:
            return state;
    }
}
//state to know when/what notification to send
const notification = (state='none', action) => {
    switch(action.type) {
        case 'NOTIFICATION_SUCCESS':
            return 'success';
        case 'NOTIFICATION_ERROR':
            return 'error';
        default:
            return state;
    }
}

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        projects,
        tags,
        page,
        notification
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
    document.getElementById('root'));
registerServiceWorker();
