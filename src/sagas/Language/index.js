import { takeLatest } from 'redux-saga/effects';

import commonConstant from '../../common/commonConstant';

export function* watchUpdateLanguage() {
  console.log('watchUpdateLanguage>>>');
  yield takeLatest(commonConstant.SET_LANGUAGE)
}