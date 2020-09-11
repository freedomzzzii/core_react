import { put } from 'redux-saga/effects';

import commonConstant from '../common/commonConstant';

// function *getPromotions() {
//   yield take('FETCH_PROMOTIONS')
//   yield put({ type: 'SHOW_LOADING_INDICATOR' })
//   try {
//      const response = yield call(api.post, '/get.promotion')
//      yield put({ type: 'FETCH_PROMOTION_SUCCESS'
//                , payload: response.data.result })
//      yield put({ type: 'HIDE_LOADING_INDICATOR' })
//   } catch(error) {
//      yield put({ type: 'FETCH_PROMOTION_FAILURE'
//                , payload: error })
//      yield put({ type: 'HIDE_LOADING_INDICATOR' })
//   }
// }


export function* getAPI(typeAction, path) {
   console.log('getAPI in>>>', typeAction, path);
  yield put({ type: commonConstant.LOADING_GLOBAL_SHOW })
  try {
     const response = yield fetch(`${commonConstant.domainAPI}${path}`)
     const data = yield response.json();
     console.log('response>>>>', response);
     console.log('data>>>', data)
     yield switch (response.status) {
        case 200:
         yield put({ type: typeAction, data });
      case 500:
         yield put({ type: commonConstant.LOADING_GLOBAL_HIDE, data: 500 });
        default:
         yield put({ type: commonConstant.LOADING_GLOBAL_HIDE, data: 'other' });
     }
  } catch(error) {
     console.log('error>>>', error);
     yield put({ type: commonConstant.LOADING_GLOBAL_HIDE })
  }
};