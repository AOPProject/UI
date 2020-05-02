import {all, call, delay, put, takeEvery} from "redux-saga/effects";
import {InterviewActions, InterviewActionTypes} from "./interview.actions";
import axios from 'axios'

export function* interviewSaga() {
  yield all([
    takeEvery(InterviewActionTypes.LOAD_INTERVIEWS_START, loadInterviews)
  ])
}

function* loadInterviews() {
  try {
    const {data} = yield call(axios.get, '/interview');
    yield delay(1000);

    yield put(InterviewActions.loadInterviewsSuccess(data));
  } catch (error) {
    yield put(InterviewActions.loadInterviewsError(error));
  }
}