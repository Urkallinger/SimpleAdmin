import {
  AppBar,
  IconButton,
  Toolbar,
  Typography,
  withStyles,
  Menu,
  MenuItem,
  ListItemText,
  SwipeableDrawer,
  List,
  ListItem,
  ListItemIcon
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {isUndefinedOrEmpty} from '../utils/JsUtils';
import {Routes} from '../Routes';
import {push} from 'connected-react-router';

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
  },
  list: {
    width: 250
  },
  navHeader: {
    height: 160
  }
};

const mapStateToProps = state => {
  return {title: state.title, menuItems: state.menuItems};
};

class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {showOptMenu: false, showNavMenu: false};
    this.optAnchor = null;
    this.navAnchor = null;
  }

  onOpenOptMenu = () => {
    this.setState({showOptMenu: true});
  };

  onCloseOptMenu = () => {
    this.setState({showOptMenu: false});
  };

  onOpenNavMenu = () => {
    this.setState({showNavMenu: true});
  };

  onCloseNavMenu = () => {
    this.setState({showNavMenu: false});
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
      const {showOptMenu} = this.state;
      const origin = {vertical: 'top', horizontal: 'right'};

      return (
        <React.Fragment>
          <IconButton
            className={classes.moreButton}
            color="inherit"
            onClick={this.onOpenOptMenu}
            buttonRef={node => (this.optAnchor = node)}
          >
            <MoreIcon />
          </IconButton>
          <Menu
            anchorEl={this.optAnchor}
            anchorOrigin={origin}
            transformOrigin={origin}
            open={showOptMenu}
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

  goTo = path => {
    return () => {
      window.store.dispatch(push(path));
    };
  };

  getNavMenu = () => {
    const {classes} = this.props;
    const {showNavMenu} = this.state;
    if (showNavMenu) {
      return (
        <SwipeableDrawer
          open={this.state.showNavMenu}
          onClose={this.onCloseNavMenu}
          onOpen={this.onOpenNavMenu}
        >
          <div onClick={this.onCloseNavMenu} onKeyDown={this.onCloseNavMenu}>
            <div className={classes.navHeader}>
              <img
                // style={{width: 250}}
                src={require('../resources/kalling-250x167.jpg')}
                alt="Kalling"
              />
            </div>
            <div className={classes.list}>
              <List>
                {Routes.map(route => (
                  <ListItem button key={route.label} onClick={this.goTo(route.path)}>
                    <ListItemIcon>{route.icon}</ListItemIcon>
                    <ListItemText
                      primary={<Typography variant="h6">{route.label}</Typography>}
                      disableTypography={true}
                    />
                  </ListItem>
                ))}
              </List>
            </div>
          </div>
        </SwipeableDrawer>
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
          <IconButton
            className={classes.menuButton}
            color="inherit"
            buttonRef={node => (this.navAnchor = node)}
            onClick={this.onOpenNavMenu}
          >
            <MenuIcon />
          </IconButton>
          {this.getNavMenu()}
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
