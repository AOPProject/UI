export enum CandidateActionTypes {
  GET_INTERVIEW_DETAILS_START = "[CANDIDATE]GET_INTERVIEW_DETAILS_START",
  GET_INTERVIEW_DETAILS_SUCCESS = "[CANDIDATE]GET_INTERVIEW_DETAILS_SUCCESS",
  GET_INTERVIEW_DETAILS_ERROR = "[CANDIDATE]GET_INTERVIEW_DETAILS_ERROR"
}

export class CandidateActions {
  static getInterviewDetailsStart() {
    return {
      type: CandidateActionTypes.GET_INTERVIEW_DETAILS_START
    }
  }

  static getInterviewDetailsSuccess(payload) {
    return {
      type: CandidateActionTypes.GET_INTERVIEW_DETAILS_SUCCESS,
      payload
    }
  }

  static getInterviewDetailsError(error) {
    return {
      type: CandidateActionTypes.GET_INTERVIEW_DETAILS_ERROR,
      error
    }
  }
}