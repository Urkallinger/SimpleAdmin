import {Typography, withStyles} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import MenuBar from './components/MenuBar';

const styles = {};

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MenuBar>App</MenuBar>
                <div>
                    <Typography variant="h6">
                        <Link to="/home">Home</Link>
                    </Typography>
                </div>
                <div>
                    <Typography variant="h6">
                        <Link to="/details">Details</Link>
                    </Typography>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(App);
