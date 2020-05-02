import {CandidateActions, CandidateActionTypes} from "./candidate.actions";
import { all, takeEvery, put, delay } from "redux-saga/effects";
import {candidateInterviewDetailsMOCK} from "../../mocks/candidate.mocks";
import {ApplicationRoutes} from "../../Routes";
import history from "../../core/history";

export function* candidateSaga() {
  yield all([
    takeEvery(CandidateActionTypes.GET_INTERVIEW_DETAILS_START, setCandidateInterviewDetails)
  ])
}

function* setCandidateInterviewDetails() {
  // fetch data... (replace whats inside payload)
  const error = false;
  yield delay(1000);

  if (error) {
    yield put(CandidateActions.getInterviewDetailsError(error));
  } else {
    history.push(ApplicationRoutes.CANDIDATE_INTERVIEW_DETAILS);
    yield put(CandidateActions.getInterviewDetailsSuccess(candidateInterviewDetailsMOCK));
  }
}