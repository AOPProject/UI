export interface ApplicationState {
    profile: ProfileState;
}

export interface ProfileState {
    userName: string;
    isAuthenticated: boolean;
}