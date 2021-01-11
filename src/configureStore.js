import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import { rootReducer } from './reducers';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = preloadedState => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware),
  )
);

export {
  store,
  sagaMiddleware,
};
