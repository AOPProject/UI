import {CandidateInterviewDetails} from "../application-state";
import {CandidateActionTypes} from "./candidate.actions";

const initialState: CandidateInterviewDetails = {
  interviewer: '',
  interviewType: '',
  room: '',
  loading: false,
  error: null
};

export function candidateReducer(state = initialState, action: any) {
  switch (action.type) {
    case CandidateActionTypes.GET_INTERVIEW_DETAILS_START: {
      return {...state, ...{loading: true}};
    }
    case CandidateActionTypes.GET_INTERVIEW_DETAILS_SUCCESS: {
      return {...state, ...{loading: false}, ...action.payload};
    }
    case CandidateActionTypes.GET_INTERVIEW_DETAILS_ERROR: {
      return {...state, ...{loading: false}, ...{error: action.error}};
    }
    default:
      return state
  }
}