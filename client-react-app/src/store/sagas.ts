import { all } from 'redux-saga/effects'
import {candidateSaga} from "./candidate/candidate.saga";
import {profileSaga} from "./profile/profile.saga";

export function* rootSaga() {
  try {
    yield all([
      candidateSaga(),
      profileSaga()
    ])
  } catch (e) {
    console.log('Something wrong happened in the sagas...');
  }
}