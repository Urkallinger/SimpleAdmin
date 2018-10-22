import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {Typography} from '@material-ui/core';
import MenuBar from '../components/MenuBar';

const styles = {};

class HomePage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MenuBar>Home</MenuBar>
                <div>
                    <Typography variant="h6"><Link to="/">App</Link></Typography>
                </div>
                <div>
                    <Typography variant="h6"><Link to="/details">details</Link></Typography>
                </div>
            </div>
        );
    }
}

HomePage.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(HomePage);
