import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import { createLogger } from 'redux-logger';

import rootReducer from './reducers';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

sagaMiddleware.run(rootSaga);

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

export default preloadedState => (
  createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(...middleware),
  )
);


