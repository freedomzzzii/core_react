import { call, takeLatest, put, race } from 'redux-saga/effects';

import commonConstant from '../../common/commonConstant';
import { workerServiceGetAPI } from '../service';

function* workerGetUser(action) {
  yield call(workerServiceGetAPI, action);
}

export function* watcherGetUser() { // this is wathcher for get user
  yield race({ // race for check have same action type call twice time and cancel action
    response: yield takeLatest(commonConstant.GET_USER_REQUEST, workerGetUser), // compaire action type for call worker to work process
    cancel: yield put({ 'type': commonConstant.LOADING_GLOBAL_HIDE }), // cancel action on have same action type call twice time
  })
}
