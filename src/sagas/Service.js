import { put } from 'redux-saga/effects';

import commonConstant from '../common/commonConstant';
import { history } from '../shared/functions'; // TODO: handle response status code and redirect pass to oops page

export function* workerServiceGetAPI(action) {
  try {
    yield put({ 'type': commonConstant.LOADING_GLOBAL_SHOW });

    const response = yield fetch(`${commonConstant.domainAPI}${action.pathAPI}`);
    const data = yield response.json();

    switch (response.status) {
      case 200:
        yield put({ 'type': commonConstant.CALL_API_SUCCESS });
        yield put({ 'type': action.typeSuccess, data, 'status': response.status });
        return yield put({ 'type': commonConstant.LOADING_GLOBAL_HIDE });
      case 500:
        yield put({ 'type': commonConstant.CALL_API_FAILURE });
        yield put({ 'type': action.typeFailure, 'data': null, 'status': response.status });
        return yield put({ 'type': commonConstant.LOADING_GLOBAL_HIDE });
      default:
        yield put({ 'type': commonConstant.CALL_API_FAILURE });
        yield put({ 'type': action.typeFailure, 'data': null, 'status': response.status });
        return yield put({ 'type': commonConstant.LOADING_GLOBAL_HIDE });
    }
  } catch (error) {
    yield put({ 'type': commonConstant.LOADING_GLOBAL_HIDE });
    return yield put({
      'type': commonConstant.CALL_API_FAILURE,
      'data': null,
      'status': error.status ? error.status : error,
      'dateTime': new Date(),
    });
  }
}
