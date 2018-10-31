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

    onOpenOptionsMenu = event => {
        this.setState({anchorEl: event.currentTarget});
    };

    onCloseOpitonsMenu = () => {
        this.setState({anchorEl: null});
    };

    getOptionsMenu = () => {
        const {menuItems} = this.props;

        if (!isUndefinedOrEmpty(menuItems)) {
            const {classes} = this.props;
            const {anchorEl} = this.state;
            const open = Boolean(anchorEl);

            return (
                <React.Fragment>
                    <IconButton
                        className={classes.moreButton}
                        color="inherit"
                        aria-label="more options"
                        onClick={this.onOpenOptionsMenu}
                    >
                        <MoreIcon />
                    </IconButton>
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                        open={open}
                        onClose={this.onCloseOpitonsMenu}
                    >
                        {menuItems.map((item, idx) => (
                            <MenuItem
                                key={idx}
                                onClick={() => {
                                    item.onClick();
                                    this.onCloseOpitonsMenu();
                                }}
                            >
                                {item.label}
                            </MenuItem>
                        ))}
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
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        {this.props.title}
                    </Typography>
                    {this.getOptionsMenu()}
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
