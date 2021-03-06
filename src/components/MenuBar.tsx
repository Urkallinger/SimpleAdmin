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
  ListItemIcon,
  WithStyles,
  Theme,
  createStyles
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import HomeIcon from '@material-ui/icons/Home';
import PropTypes, {any} from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {isUndefinedOrEmpty} from '../utils/JsUtils';
import {Routes} from '../Routes';
import {push} from 'connected-react-router';
import {OptionMenuItem} from '../model/OptionMenuItem';
import {PopoverOrigin} from '@material-ui/core/Popover';

const styles = (theme: Theme) =>
  createStyles({
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
    navHeader: {
      height: 160
    },
    navHeaderIcon: {
      width: '100%',
      height: '100%',
      backgroundColor: 'green',
      fill: 'yellow'
    }
  });

const mapStateToProps = (state: any) => {
  return {title: state.root.title, optMenuItems: state.root.optMenuItems};
};

class MenuBar extends Component<Props, State> {
  optAnchor: any;
  navAnchor: any;

  constructor(props: Props) {
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

  createOptMenuItem = (data: OptionMenuItem) => {
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
    const {optMenuItems} = this.props;

    if (!isUndefinedOrEmpty(optMenuItems)) {
      const {classes} = this.props;
      const {showOptMenu} = this.state;
      const origin: PopoverOrigin = {vertical: 'top', horizontal: 'right'};

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
            {optMenuItems.map(item => this.createOptMenuItem(item))}
          </Menu>
        </React.Fragment>
      );
    } else {
      return null;
    }
  };

  goTo = (path: string) => {
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
              <HomeIcon className={classes.navHeaderIcon} />
            </div>
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

interface Props extends WithStyles<typeof styles> {
  title: string;
  optMenuItems: Array<OptionMenuItem>;
}

interface State {
  showNavMenu: boolean;
  showOptMenu: boolean;
}

export default connect(mapStateToProps)(withStyles(styles)(MenuBar));
