import { all } from 'redux-saga/effects';

import { watcherUpdateLanguage } from './Language';

import { watcherGetUser } from './User';

export default function* rootSaga() {
  yield all([
    // language
    watcherUpdateLanguage(),
    // user
    watcherGetUser(),
  ]);
}
