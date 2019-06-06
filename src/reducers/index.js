import { combineReducers } from 'redux';

import { getProvince } from './Province';

const rootReducer = combineReducers({
  getProvince,
});

export default rootReducer;
