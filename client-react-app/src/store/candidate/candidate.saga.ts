import {CandidateActions, CandidateActionTypes} from "./candidate.actions";
import {all, takeEvery, put, delay, call} from "redux-saga/effects";
import {ApplicationRoutes} from "../../Routes";
import history from "../../core/history";
import axios from "axios";

export function* candidateSaga() {
  yield all([
    takeEvery(CandidateActionTypes.GET_INTERVIEW_DETAILS_START, setCandidateInterviewDetails),
    takeEvery(CandidateActionTypes.LOAD_CANDIDATE_INFO_START, loadCandidateInfo)
  ])
}

function* setCandidateInterviewDetails(action) {
  try {
    const {data} = yield call(axios.get, `/interview/email/?email=${action.payload.email}`);
    console.log('DATA: ', data);

    history.push(ApplicationRoutes.CANDIDATE_INTERVIEW_DETAILS);
    const lastInterview = data[data.length - 1];

    const {data: candidateData} = yield call(axios.get, `/candidate/${lastInterview.candidateId}`);
    console.log('DATA: ', candidateData);

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

function* loadCandidateInfo(action) {
  try {
    const {data} = yield call(axios.get, `/candidate/${action.payload.id}`);
    console.log('DATA: ', data);
    yield put(CandidateActions.loadCandidateInfoSuccess(data));
  } catch (error) {
    yield put(CandidateActions.loadCandidateInfoError(error));
  }
}