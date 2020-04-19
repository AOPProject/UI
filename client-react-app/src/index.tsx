import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core";
import './index.css';
import App from './components/App/App';
import * as serviceWorker from './serviceWorker';
import { applyMiddleware, createStore}  from "redux";
import reducers from './store/reducers';
import logger from "redux-logger";
import history from './history';
import { Routes } from './Routes';
import { Provider } from "react-redux";
import { theme } from './theme';

export const store = createStore(reducers, applyMiddleware(logger));

store.dispatch({type: 'INITIAL_STATE_REDUX_TEST'});

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <MuiThemeProvider theme={theme}>
        <Routes/>
      </MuiThemeProvider>
    </Router>
  </Provider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
