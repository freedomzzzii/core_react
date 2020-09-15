import { call, take } from 'redux-saga/effects';

import commonConstant from '../../common/commonConstant';
import { getAPI } from '../Service';
import { fetchGetUser } from '../../actions';

export function* watchDeleteUserRequest(){
  const test = yield take(fetchGetUser);

  yield call(getAPI, test.type, test.pathAPI);
}
