import { combineReducers } from 'redux';

import { language } from './Language';

import { getUser } from './User';

import { loading, callAPI } from './Global';

export default combineReducers({
  // language
  language,
  // user
  getUser,
  // global
  loading,
  callAPI,
});
