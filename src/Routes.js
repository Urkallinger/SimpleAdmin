import React from 'react';
import {Switch, Route} from 'react-router';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import {RouteData} from './model/RouteData';
import HomeIcon from '@material-ui/icons/Home';
import LoupeIcon from '@material-ui/icons/Loupe';

export const Routes = [
  new RouteData('Home', HomePage, '/', <HomeIcon />),
  new RouteData('Details', DetailsPage, '/details', <LoupeIcon />)
];

const Routing = () => (
  <Switch>
    {Routes.map(route => (
      <Route exact path={route.path} component={route.component} key={route.path} />
    ))}
  </Switch>
);

export default Routing;
