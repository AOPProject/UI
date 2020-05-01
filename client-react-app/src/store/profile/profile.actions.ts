export enum ProfileActionTypes {
  LOGIN_START = "[PROFILE]LOGIN_START",
  LOGIN_SUCCESS = "[PROFILE]LOGIN_SUCCESS",
  LOGIN_ERROR = "[PROFILE]LOGIN_ERROR",
  REGISTER_START = "[PROFILE]REGISTER_START",
  REGISTER_SUCCESS = "[PROFILE]REGISTER_SUCCESS",
  REGISTER_ERROR = "[PROFILE]REGISTER_ERROR"
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

  static registerStart(email: string) {
    return {
      type: ProfileActionTypes.REGISTER_START,
      payload: {
        email,
      }
    }
  }

  static registerSuccess(payload) {
    return {
      type: ProfileActionTypes.REGISTER_SUCCESS,
      payload
    }
  }

  static registerError(error) {
    return {
      type: ProfileActionTypes.REGISTER_ERROR,
      error
    }
  }
}