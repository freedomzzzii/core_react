import { put } from 'redux-saga/effects';

import commonConstant from '../common/commonConstant';
import { history } from '../../helpers';

export function* getAPI(type, path) {
  try {
    yield put({ 'type': commonConstant.LOADING_GLOBAL_SHOW });

    const response = yield fetch(`${commonConstant.domainAPI}${path}`);
    const data = yield response.json();

    switch (response.status) {
      case 200:
        yield put({ 'type': commonConstant.CALL_API_SUCCESS });
        return yield put({ type, data, 'status': response.status });
      case 500:
        yield put({ 'type': commonConstant.CALL_API_FAILURE });
        return yield put({ 'type': commonConstant.LOADING_GLOBAL_HIDE, 'data': null, 'status': response.status });
      default:
        yield put({ 'type': commonConstant.CALL_API_FAILURE });
        return yield put({ 'type': commonConstant.LOADING_GLOBAL_HIDE, 'data': null, 'status': response.status });
    }
  } catch (error) {
    yield put({ 'type': commonConstant.LOADING_GLOBAL_HIDE });
    yield put({
      'data': null,
      'status': error.status ? error.status : error,
      'dateTime': new Date(),
    });
  }
}
