export interface ApplicationState {
    profile: ProfileState;
    candidate: CandidateInterviewDetails;
}

export interface ProfileState {
    userName: string;
    isAuthenticated: boolean;
    loading: boolean;
    error: any;
}

export interface CandidateInterviewDetails {
    room: string;
    interviewType: string;
    interviewer: string;
    loading: boolean;
    error: any;
}