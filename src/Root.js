import {ConnectedRouter, connectRouter, routerMiddleware} from 'connected-react-router';
import {createHashHistory} from 'history';
import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {applyMiddleware, compose, createStore} from 'redux';
import rootReducer from './reducers/Reducers';
import Routes from './Routes';

const history = createHashHistory();

const store = createStore(connectRouter(history)(rootReducer),
                          {dummies: []},
                          compose(applyMiddleware(routerMiddleware(history))));

export default class Root extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Routes />
                </ConnectedRouter>
            </Provider>
        );
    }
}
