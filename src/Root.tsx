import {MuiThemeProvider} from '@material-ui/core';
import {ConnectedRouter, connectRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory, History} from 'history';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore, combineReducers} from 'redux';
import rootReducer from './reducers/Reducers';
import {SimpleAdminTheme} from './Theme';
import App from './App';

declare global {
  interface Window { store: any; }
}

window.store = window.store || {};

const history = createBrowserHistory();

export const createReducers = (history: History) => {
  return combineReducers({
    root: rootReducer,
    router: connectRouter(history)
  });
};

const store = createStore(createReducers(history),
                          compose(applyMiddleware(routerMiddleware(history))));
window.store = store;

export default class Root extends Component {
  render = () => {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <MuiThemeProvider theme={SimpleAdminTheme}>
            <App />
          </MuiThemeProvider>
        </ConnectedRouter>
      </Provider>
    );
  };
}
