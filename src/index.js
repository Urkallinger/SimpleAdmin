import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import {MuiThemeProvider} from '@material-ui/core';
import {SimpleAdminTheme} from './Theme';

const app = (
    <MuiThemeProvider theme={SimpleAdminTheme}>
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/details" component={DetailsPage} />
                <Route path="/home" component={HomePage} />
            </Switch>
        </BrowserRouter>
    </MuiThemeProvider>
);

ReactDOM.render(app, document.getElementById('root'));
