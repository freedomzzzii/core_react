import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import rootSaga from './sagas';
import App from './App';
import { store, sagaMiddleware } from './configureStore';

ReactDOM.render(
  <Provider store={store()}>
    <App />
  </Provider>,
  document.getElementById('root')
);

sagaMiddleware.run(rootSaga);
