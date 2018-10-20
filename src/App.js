import {withStyles, Typography, MuiThemeProvider} from '@material-ui/core';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {SimpleAdminTheme} from './Theme';

const styles = {};

class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={SimpleAdminTheme}>
                <div>
                    <Typography variant="h3">App</Typography>
                    <div>
                        <Link to="/home">Home</Link>
                    </div>
                    <div>
                        <Link to="/details">Details</Link>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(styles)(App);
