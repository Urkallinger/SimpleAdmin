import PropTypes from 'prop-types';
import React, {Component} from 'react';
import MenuBar from './components/MenuBar';
import {push} from 'connected-react-router';
import {Routing} from './Routes';
import {withStyles} from '@material-ui/core';
import Snackbar from './components/Snackbar';

const styles = () => ({
  content: {
    padding: 10
  }
});

class App extends Component {
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

App.propTypes = {
  classes: PropTypes.object
};

export default withStyles(styles)(App);
