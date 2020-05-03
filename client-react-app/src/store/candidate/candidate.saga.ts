import {CandidateActions, CandidateActionTypes} from "./candidate.actions";
import {all, takeEvery, put, delay, call} from "redux-saga/effects";
import {ApplicationRoutes} from "../../Routes";
import history from "../../core/history";
import axios from "axios";

export function* candidateSaga() {
  yield all([
    takeEvery(CandidateActionTypes.GET_INTERVIEW_DETAILS_START, setCandidateInterviewDetails)
  ])
}

function* setCandidateInterviewDetails(action) {
  try {
    const {data} = yield call(axios.get, `/interview/email/?email=${action.payload.email}`);
    console.log('DATA: ', data);

    history.push(ApplicationRoutes.CANDIDATE_INTERVIEW_DETAILS);
    const lastInterview = data[data.length - 1];
    const interviewDetails = {
      room: lastInterview.reservedRoom || '',
      interviewType: lastInterview.type || '' ,
      interviewer: (lastInterview.firstName || '') + ' ' + (lastInterview.lastName || ''),
      email: lastInterview.email || ''
    };
    yield put(CandidateActions.getInterviewDetailsSuccess(interviewDetails));
  } catch (error) {
  yield put(CandidateActions.getInterviewDetailsError(error));

  }
}