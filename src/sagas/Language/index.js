import { put } from 'redux-saga/effects';

import commonConstant from '../../common/commonConstant';

export function* watchUpdateLanguage() {
  yield put({ 'type': commonConstant.SET_LANGUAGE });
}
