import {MuiThemeProvider} from '@material-ui/core';
import {ConnectedRouter, connectRouter, routerMiddleware} from 'connected-react-router';
import {createBrowserHistory, History} from 'history';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import App from './App';
import RootReducer from './reducers/RootReducer';
import WsReducer from './reducers/WsReducer';
import {SimpleAdminTheme} from './Theme';

declare global {
  interface Window {
    store: any;
  }
}

window.store = window.store || {};

const history = createBrowserHistory();

export const createReducers = (history: History) => {
  return combineReducers({
    root: RootReducer,
    ws: WsReducer,
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
