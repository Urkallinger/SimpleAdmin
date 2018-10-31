import React from 'react';
import {Switch, Route} from 'react-router';
import HomePage from './pages/HomePage';
import App from './App';

const Routes = () => (
    <Switch>
        <Route path="/home" component={HomePage} />
        <Route path="/" component={App} />
    </Switch>
);

export default Routes;
