import { createStyles, withStyles, WithStyles } from '@material-ui/core';
import { push } from 'connected-react-router';
import React, { Component } from 'react';
import MenuBar from './components/MenuBar';
import Snackbar from './components/Snackbar';
import { Routing } from './Routes';
import { WsClient } from './ws/WsClient';

const styles = createStyles({
  content: {
    padding: 10
  }
});

class App extends Component<Props> {
  constructor(props: Props) {
    super(props);
    new WsClient();
  }
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
