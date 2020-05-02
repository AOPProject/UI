import {ProfileState} from "../application-state";
import {ProfileActionTypes} from "./profile.actions";

const initialState: ProfileState = {
  email: '',
  firstName: '',
  lastName: '',
  loading: false,
  error: null,
};

export function profileReducer(state = initialState, action: any) {
  switch(action.type) {
    case ProfileActionTypes.LOGIN_START: {
      return {...state, ...{loading: true}};
    }
    case ProfileActionTypes.LOGIN_SUCCESS: {
      return {...state, ...{loading: false}, ...action.payload};
    }
    case ProfileActionTypes.LOGIN_ERROR: {
      return {...state, ...{loading: false}, ...{error: action.error}};
    }
    case ProfileActionTypes.LOGOUT_START: {
      return {...state, ...{loading: true}};
    }
    case ProfileActionTypes.LOGOUT_SUCCESS: {
      return {...state, ...initialState};
    }
    case ProfileActionTypes.REGISTER_START: {
      return {...state, ...{loading: true}};
    }
    case ProfileActionTypes.REGISTER_SUCCESS: {
      return {...state, ...{loading: false}};
    }
    case ProfileActionTypes.REGISTER_ERROR: {
      return {...state, ...{loading: false}, ...{error: action.error}};
    }
    default:
      return state;
  }
}