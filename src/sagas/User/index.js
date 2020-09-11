import { call, take } from 'redux-saga/effects';

import commonConstant from '../../common/commonConstant';
import { getAPI } from '../Service';

// export function* watchGetUser() {
//   console.log('watchGetUser>>>');
//   yield call(commonConstant.GET_USER, getAPI)
// }

import { fetchGetUser } from '../../actions';

// export function* deleteUser(path){
//   try{
//       // yield call(api.deleteUser, userId);
//       console.log('>>>>', path);
//       yield call(getAPI, path)

//       // yield call(getUsers);
//   }catch(e){
//       // yield put(actions.usersError({
//       //     error: 'An error occurred when trying to delete the user'
//       // }));
//       console.log('error>>');
// }
// }

export function* watchDeleteUserRequest(){
  // while(true){
    // console.log('actions>>>', actions.type);
      const test = yield take(fetchGetUser);
      console.log('>>>', test);
      yield call(getAPI, test.type, test.pathAPI);
  // }
}