export interface ApplicationState {
  profile: ProfileState;
  candidate: CandidateInterviewDetails;
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