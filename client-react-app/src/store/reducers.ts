import { combineReducers } from 'redux';
import { profileReducer } from './profile/profile.reducer';
import {candidateReducer} from "./candidate/candidate.reducer";

export default combineReducers({
  profile: profileReducer,
  candidate: candidateReducer,
});