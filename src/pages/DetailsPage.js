import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import {Link} from 'react-router-dom';
import {Typography} from '@material-ui/core';
import MenuBar from '../components/MenuBar';

const styles = {};

class DetailsPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <MenuBar>Details</MenuBar>
                <div>
                    <Typography variant="h6"><Link to="/">App</Link></Typography>
                </div>
                <div>
                    <Typography variant="h6"><Link to="/home">Home</Link></Typography>
                </div>
            </div>
        );
    }
}

DetailsPage.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(DetailsPage);
