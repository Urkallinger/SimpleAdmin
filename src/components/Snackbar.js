import {IconButton, Snackbar as MuiSnackbar, withStyles} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {showMessage} from '../actions/Actions';

const MESSAGE_ID = 'message-id';

const styles = theme => ({
  close: {
    padding: theme.spacing.unit / 2
  }
});

const mapStateToProps = state => {
  return {message: state.root.message};
};

const mapDispatchToProps = dispatch => {
  return {
    showMessage: message => dispatch(showMessage(message))
  };
};

class Snackbar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  onClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    // TODO: Workaround
    this.props.showMessage(undefined);
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
          <IconButton key="close" aria-label="Close" color="inherit" onClick={this.onClose}>
            <CloseIcon />
          </IconButton>
        ]}
      />
    );
  };
}

Snackbar.propTypes = {
  message: PropTypes.object,
  showMessage: PropTypes.func,
  classes: PropTypes.object.isRequired // material-ui
};

export default connect(mapStateToProps,
                       mapDispatchToProps)(withStyles(styles)(Snackbar));
