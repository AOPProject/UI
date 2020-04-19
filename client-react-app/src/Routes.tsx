import * as React from 'react';
import { Route } from "react-router-dom";
import App from './components/App/App';
import Login from './components/Login/Login';

export class Routes extends React.Component<{}, {}> {
    render() {
        return (
            <div style={{height: 'calc(100% - 64px)'}}>
                <Route path="/" exact strict component={App}/>
                <Route path="/login" exact strict component={Login}/>
            </div>
        )
    }
}