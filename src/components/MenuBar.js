import {
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    withStyles,
    Menu,
    MenuItem
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {isUndefinedOrEmpty} from '../utils/JsUtils';

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
    return {title: state.title, menuItems: state.menuItems};
};

class MenuBar extends Component {
    constructor(props) {
        super(props);
        this.state = {anchorEl: null};
    }

    onOpenOptMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    onCloseOptMenu = () => {
        this.setState({anchorEl: null});
    };

    createMenuItem = data => {
        const onClick = () => {
            data.onClick();
            this.onCloseOptMenu();
        };
        return (
            <MenuItem key={data.label} onClick={onClick}>
                {data.label}
            </MenuItem>
        );
    };

    getOptMenu = () => {
        const {menuItems} = this.props;

        if (!isUndefinedOrEmpty(menuItems)) {
            const {classes} = this.props;
            const {anchorEl} = this.state;
            const open = Boolean(anchorEl);
            const origin = {vertical: 'top', horizontal: 'right'};

            return (
                <React.Fragment>
                    <IconButton
                        className={classes.moreButton}
                        color="inherit"
                        onClick={this.onOpenOptMenu}
                    >
                        <MoreIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        anchorOrigin={origin}
                        transformOrigin={origin}
                        open={open}
                        onClose={this.onCloseOptMenu}
                    >
                        {menuItems.map(item => this.createMenuItem(item))}
                    </Menu>
                </React.Fragment>
            );
        } else {
            return null;
        }
    };

    render() {
        const {classes} = this.props;

        return (
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        {this.props.title}
                    </Typography>
                    {this.getOptMenu()}
                </Toolbar>
            </AppBar>
        );
    }
}

MenuBar.propTypes = {
    title: PropTypes.string,
    menuItems: PropTypes.array,
    classes: PropTypes.object
};

export default connect(mapStateToProps)(withStyles(styles)(MenuBar));
