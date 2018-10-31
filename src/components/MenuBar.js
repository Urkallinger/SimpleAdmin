import {AppBar, IconButton, Toolbar, Typography, withStyles} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';

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
    },
    moreButton: {
        marginRight: -15
    }
};

const mapStateToProps = state => {
    return {title: state.title};
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
                        {this.props.title}
                    </Typography>
                    <IconButton
                        className={classes.moreButton}
                        color="inherit"
                        aria-label="more options"
                    >
                        <MoreIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        );
    }
}

MenuBar.propTypes = {
    title: PropTypes.string,
    classes: PropTypes.object
};

export default connect(mapStateToProps)(withStyles(styles)(MenuBar));
