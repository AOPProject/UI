import {all, call, delay, put, takeEvery} from "redux-saga/effects";
import {ProfileActions, ProfileActionTypes} from "./profile.actions";
import history from "../../history";
import {ApplicationRoutes} from "../../Routes";
import axios from 'axios';

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

function* requestAccountCreation(action) {
  try {
    console.log('payload: ', action.payload);
    yield delay(1000);
    const {data} = yield call(axios.post, 'http://localhost:8080/register', action.payload);

    console.log('Data is: ', data);

    history.push(ApplicationRoutes.LOGIN);
    yield put(ProfileActions.registerSuccess({}));
  } catch(error) {
    yield put(ProfileActions.registerError(error));
  }
}