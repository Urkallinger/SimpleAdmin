import {AppBar, IconButton, Toolbar, Typography, withStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import PropTypes from 'prop-types';
import React, {Component} from 'react';

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    }
};

class MenuBar extends Component {
    render() {
        const {classes} = this.props;

        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        {this.props.children}
                    </Typography>
                </Toolbar>
            </AppBar>
        );
    }
}

MenuBar.propTypes = {
    children: PropTypes.string,
    classes: PropTypes.object
};

export default withStyles(styles)(MenuBar);
