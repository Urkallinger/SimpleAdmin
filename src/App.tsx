import PropTypes from 'prop-types';
import React, {Component} from 'react';
import MenuBar from './components/MenuBar';
import {push} from 'connected-react-router';
import {Routing} from './Routes';
import {withStyles, createStyles, WithStyles} from '@material-ui/core';
import Snackbar from './components/Snackbar';

const styles = createStyles({
  content: {
    padding: 10
  }
});

class App extends Component<Props> {
  goToHomePage = () => {
    window.store.dispatch(push('/home'));
  };

  render() {
    const {classes} = this.props;
    return (
      <div>
        <MenuBar />
        <div className={classes.content}>
          <Routing />
        </div>
        <Snackbar />
      </div>
    );
  }
}

interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(App);
