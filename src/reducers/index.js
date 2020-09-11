import { combineReducers } from 'redux';

import { language } from './Language';

import { getUser } from './User';

export default combineReducers({
  // language
  language,
  // user
  getUser,
});
