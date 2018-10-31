import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import {MuiThemeProvider} from '@material-ui/core';
import {SimpleAdminTheme} from './Theme';
import Root from './Root';

ReactDOM.render(<Root />, document.getElementById('root'));

ReactDOM.render(app, document.getElementById('root'));
