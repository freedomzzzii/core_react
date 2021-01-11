import { combineReducers } from 'redux';

import { language } from './Language';

import { getUser } from './User';

import { loading, callAPI } from './Global';

const reducers = {
  // language
  language,
  // user
  getUser,
  // global
  loading,
  callAPI,
};

const rootReducer = combineReducers(reducers);

export {
  reducers,
  rootReducer,
};
