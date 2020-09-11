import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';

// import configureStore from './configureStore';

import {createStore, applyMiddleware} from 'redux';
// import axios from 'axios';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';
import reducers from './reducers';
import { createLogger } from 'redux-logger';

// const sagaMiddleware = createSagaMiddleware();

// axios.defaults.withCredentials = true;
// axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api';

// const store = createStore(reducers, applyMiddleware(sagaMiddleware));

// sagaMiddleware.run(rootSaga);
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];



if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = preloadedState => (
  createStore(
    reducers,
    preloadedState,
    applyMiddleware(...middleware),
  )
);

// sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

sagaMiddleware.run(rootSaga);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
