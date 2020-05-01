import * as React from 'react';
import { Route } from "react-router-dom";
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import { WelcomePage } from "./components/WelcomePage/WelcomePage";
import CandidatePage from "./components/CandidatePage/CandidatePage";
import CandidateInterviewDetails from "./components/CandidateInterviewDetails/CandidateInterviewDetails";

export enum ApplicationRoutes {
  ROOT = '/',
  CANDIDATE_PAGE = '/candidate-page',
  CANDIDATE_INTERVIEW_DETAILS = '/candidate-interview-details',
  LOGIN = '/login',
  SIGN_UP = '/sign-up'
}

export class Routes extends React.Component<{}, {}> {
    render() {
        return (
            <div style={{height: 'calc(100% - 64px)', display: 'flex'}}>
                <Route path={ApplicationRoutes.ROOT} exact strict component={WelcomePage}/>
                <Route path={ApplicationRoutes.CANDIDATE_PAGE} exact strict component={CandidatePage}/>
                <Route path={ApplicationRoutes.CANDIDATE_INTERVIEW_DETAILS} exact strict component={CandidateInterviewDetails}/>
                <Route path={ApplicationRoutes.LOGIN} exact strict component={Login}/>
                <Route path={ApplicationRoutes.SIGN_UP} exact strict component={SignUp}/>
            </div>
        )
    }
}