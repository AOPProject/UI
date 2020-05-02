export enum InterviewActionTypes {
  LOAD_INTERVIEWS_START = "[INTERVIEW]LOAD_INTERVIEWS_START",
  LOAD_INTERVIEWS_SUCCESS = "[INTERVIEW]LOAD_INTERVIEWS_SUCCESS",
  LOAD_INTERVIEWS_ERROR = "[INTERVIEW]LOAD_INTERVIEWS_ERROR",
}

export class InterviewActions {
  static loadInterviews() {
    return {
      type: InterviewActionTypes.LOAD_INTERVIEWS_START
    }
  }

  static loadInterviewsSuccess(payload) {
    return {
      type: InterviewActionTypes.LOAD_INTERVIEWS_SUCCESS,
      payload
    }
  }

  static loadInterviewsError(error) {
    return {
      type: InterviewActionTypes.LOAD_INTERVIEWS_ERROR,
      error
    }
  }
}