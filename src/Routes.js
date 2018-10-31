import React from 'react';
import {Switch, Route} from 'react-router';
import HomePage from './pages/HomePage';

const Routes = () => (
    <Switch>
        <Route path="/" component={HomePage} />
    </Switch>
);

export default Routes;
