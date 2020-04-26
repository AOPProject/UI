import * as React from 'react';
import { Route } from "react-router-dom";
import Login from './components/Login/Login';
import { WelcomePage } from "./components/WelcomePage/WelcomePage";

export class Routes extends React.Component<{}, {}> {
    render() {
        return (
            <div style={{height: 'calc(100% - 64px)', display: 'flex'}}>
                <Route path="/" exact strict component={WelcomePage}/>
                <Route path="/login" exact strict component={Login}/>
            </div>
        )
    }
}