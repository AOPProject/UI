export enum ProfileActionTypes {
  LOGIN_START = "[PROFILE]LOGIN_START",
  LOGIN_SUCCESS = "[PROFILE]LOGIN_SUCCESS",
  LOGIN_ERROR = "[PROFILE]LOGIN_ERROR"
}

export class ProfileActions {
  static loginStart(userName: string, password: string) {
    return {
      type: ProfileActionTypes.LOGIN_START,
      payload: {
        userName,
        password
      }
    }
  }

  static loginSuccess(payload) {
    return {
      type: ProfileActionTypes.LOGIN_SUCCESS,
      payload
    }
  }

  static loginError(error) {
    return {
      type: ProfileActionTypes.LOGIN_ERROR,
      error
    }
  }
}