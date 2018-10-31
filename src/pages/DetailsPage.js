import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
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
            </div>
        );
    }
}

DetailsPage.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(DetailsPage);
