import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {Typography} from '@material-ui/core';

const styles = {};

class DetailsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Typography variant="h3">Details</Typography>
                <div>
                    <Link to="/">App</Link>
                </div>
                <div>
                    <Link to="/home">Home</Link>
                </div>
            </div>
        );
    }
}

DetailsPage.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(DetailsPage);
