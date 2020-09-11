import { all } from 'redux-saga/effects';

import { watchUpdateLanguage } from './Language';

import { watchDeleteUserRequest } from './User';

export default function* rootSaga() {
  yield all([
    // language
    watchUpdateLanguage(),
    // user
    // watchGetUser(),
    watchDeleteUserRequest(),
  ]);
}
