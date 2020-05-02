export interface ApplicationState {
  profile: ProfileState;
  candidate: CandidateInterviewDetails;
  interviews: InterviewsState;
}

export interface ProfileState {
  email: string;
  firstName: string;
  lastName: string;
  loading: boolean;
  error: any;
}

export interface CandidateInterviewDetails {
  room: string;
  interviewType: string;
  interviewer: string;
  email: string;
  loading: boolean;
  error: any;
}

export interface InterviewsState {
  interviewsList: Array<any>;
  loading: boolean;
  error: any;
}