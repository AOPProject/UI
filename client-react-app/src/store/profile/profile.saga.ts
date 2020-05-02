import {all, call, delay, put, takeEvery} from "redux-saga/effects";
import {ProfileActions, ProfileActionTypes} from "./profile.actions";
import history from "../../core/history";
import {ApplicationRoutes} from "../../Routes";
import axios from 'axios';
import { session } from '../../index';

export function* profileSaga() {
  yield all([
    takeEvery(ProfileActionTypes.LOGIN_START, setCandidateInterviewDetails),
    takeEvery(ProfileActionTypes.REGISTER_START, requestAccountCreation),
    takeEvery(ProfileActionTypes.LOGOUT_START, logout),
  ])
}

function* setCandidateInterviewDetails(action) {
  try {
    const {data} = yield call(axios.post, `/authenticate`, action.payload);
    axios.defaults.headers.common['Authorization'] = `Bearer ${data.token}`;

    session.setSession(data.token);
    yield put(ProfileActions.loginSuccess(session.getSession()));
    history.push(ApplicationRoutes.ROOT);
  } catch (error) {
    yield put(ProfileActions.loginError(error));
  }
}

function* requestAccountCreation(action) {
  try {
    yield delay(1000);
    yield call(axios.post, `/register`, action.payload);

    yield put(ProfileActions.registerSuccess({}));
    history.push(ApplicationRoutes.LOGIN);
  } catch(error) {
    yield put(ProfileActions.registerError(error));
  }
}

function* logout() {
  session.logOut();
  yield put(ProfileActions.logoutSuccess());
  history.push(ApplicationRoutes.LOGIN);
}