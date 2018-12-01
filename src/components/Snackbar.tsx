import {
  IconButton,
  Snackbar as MuiSnackbar,
  withStyles,
  createStyles,
  Theme,
  WithStyles
} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showMessage} from '../actions/Actions';
import { Message } from '../model/Message';

const MESSAGE_ID = 'message-id';

const styles = (theme: Theme) =>
  createStyles({
    close: {
      padding: theme.spacing.unit / 2
    }
  });

const mapStateToProps = (state: any) => {
  return {message: state.root.message};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    showMessage: (message: Message) => dispatch(showMessage(message))
  };
};

class Snackbar extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  onClose = (event: any, reason: any) => {
    if (reason === 'clickaway') {
      return;
    }
    // TODO: Workaround
    this.props.showMessage();
  };

  render = () => {
    const {message} = this.props;
    const msgPresent = Boolean(message);

    return (
      <MuiSnackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
        open={msgPresent}
        autoHideDuration={6000}
        onClose={this.onClose}
        ContentProps={{
          'aria-describedby': MESSAGE_ID
        }}
        message={<span id={MESSAGE_ID}>{msgPresent ? message.message : null}</span>}
        action={[
          // @ts-ignore
          <IconButton key="close" aria-label="Close" color="inherit" onClick={this.onClose}>
            <CloseIcon />
          </IconButton>
        ]}
      />
    );
  };
}

interface Props extends WithStyles<typeof styles> {
  message: Message,
  showMessage: () => void,
}

export default connect(mapStateToProps,
                       mapDispatchToProps)(withStyles(styles)(Snackbar));
