import {MuiThemeProvider} from '@material-ui/core';
import {ConnectedRouter, connectRouter, routerMiddleware} from 'connected-react-router';
import {createHashHistory} from 'history';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers/Reducers';
import Routes from './Routes';
import {SimpleAdminTheme} from './Theme';

const history = createHashHistory();

const store = createStore(connectRouter(history)(rootReducer),
                          {dummies: []},
                          compose(applyMiddleware(routerMiddleware(history))));
window.store = store;

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <MuiThemeProvider theme={SimpleAdminTheme}>
                        <Routes />
                    </MuiThemeProvider>
                </ConnectedRouter>
            </Provider>
        );
    }
}
