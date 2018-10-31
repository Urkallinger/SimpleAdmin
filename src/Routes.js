import React from 'react';
import {Switch, Route} from 'react-router';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';

const Routes = () => (
    <Switch>
        <Route path="/details" component={DetailsPage} />
        <Route path="/" component={HomePage} />
    </Switch>
);

export default Routes;
