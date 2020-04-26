import {all, delay, put, takeEvery} from "redux-saga/effects";
import {ProfileActions, ProfileActionTypes} from "./profile.actions";

export function* profileSaga() {
  yield all([
    takeEvery(ProfileActionTypes.LOGIN_START, setCandidateInterviewDetails)
  ])
}

function* setCandidateInterviewDetails() {
  // fetch data... (replace whats inside payload)
  const error = false;
  yield delay(1000);

  if (error) {
    yield put(ProfileActions.loginError(error));
  } else {
    yield put(ProfileActions.loginSuccess({}));
  }
}