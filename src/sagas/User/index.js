import { call, takeLatest, put, race } from 'redux-saga/effects';

import commonConstant from '../../common/commonConstant';
import { workerServiceGetAPI } from '../Service';

function* workerGetUser(action) {
  yield call(workerServiceGetAPI, action);
}

export function* watcherGetUser(){
  yield race({
    response: yield takeLatest(commonConstant.GET_USER_REQUEST, workerGetUser),
    cancel: yield put({ 'type': commonConstant.LOADING_GLOBAL_HIDE }),
  })
}
