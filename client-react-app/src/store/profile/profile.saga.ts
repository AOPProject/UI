import {all, delay, put, takeEvery} from "redux-saga/effects";
import {ProfileActions, ProfileActionTypes} from "./profile.actions";
import history from "../../history";
import {ApplicationRoutes} from "../../Routes";

export function* profileSaga() {
  yield all([
    takeEvery(ProfileActionTypes.LOGIN_START, setCandidateInterviewDetails),
    takeEvery(ProfileActionTypes.REGISTER_START, requestAccountCreation)
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

function* requestAccountCreation() {
  // fetch data... (replace whats inside payload)
  const error = true;
  yield delay(1000);

  if (error) {
    yield put(ProfileActions.registerError(error));
  } else {
    history.push(ApplicationRoutes.LOGIN);
    yield put(ProfileActions.registerSuccess({}));
  }
}