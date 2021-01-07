import { put } from 'redux-saga/effects';

import commonConstant from '../../common/commonConstant';

export function* watcherUpdateLanguage() {
  yield put({ 'type': commonConstant.SET_LANGUAGE });
}
