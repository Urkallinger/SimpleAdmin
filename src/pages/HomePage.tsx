import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  sendMessage,
  clearMessages,
  setTitle,
  setOptionMenuItems,
  showMessage
} from '../actions/Actions';
import {withStyles, WithStyles, createStyles, Theme} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import List from '../components/List';
import {isUndefinedOrEmpty} from '../utils/JsUtils';
import {Message} from '../model/Message';
import {OptionMenuItem} from '../model/OptionMenuItem';
import Fab from '@material-ui/core/Fab';

const styles = (theme: Theme) =>
  createStyles({
    faceButton: {
      position: 'fixed',
      bottom: 10,
      right: 10
    },
    output: {
      width: '100%',
      border: '1px solid black',
      minHeight: '30px',
      marginTop: 10
    }
  });

const mapStateToProps = (state: any) => {
  return {messages: state.ws.messages};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setTitle: (title: string) => dispatch(setTitle(title)),
    setOptionMenuItems: (menuItems: Array<OptionMenuItem>) =>
      dispatch(setOptionMenuItems(menuItems)),
    sendMessage: (message: string) => dispatch(sendMessage(message)),
    clearMessages: () => dispatch(clearMessages()),
    showMessage: (message: Message) => dispatch(showMessage(message))
  };
};

class HomePage extends Component<Props> {
  componentDidMount = () => {
    this.props.setTitle('Home');
    this.props.setOptionMenuItems([{label: 'clear messages', onClick: this.onClearMessages}]);
  };

  componentWillUnmount = () => {
    this.props.setOptionMenuItems([]);
  };

  onClearMessages = () => {
    if (isUndefinedOrEmpty(this.props.messages)) {
      this.props.showMessage(new Message('No messages available to delete.'));
    } else {
      this.props.clearMessages();
      console.log('Messages cleared');
    }
  };

  onClick = () => {
    this.props.sendMessage('Message from HomePage');
  };

  render = () => {
    const {classes} = this.props;
    return (
      <div>
        <List />
        <Fab onClick={this.onClick} color="primary" className={classes.faceButton}>
          <FaceIcon />
        </Fab>
      </div>
    );
  };
}

interface Props extends WithStyles<typeof styles> {
  messages: Array<string>;
  sendMessage: (message: string) => void;
  clearMessages: () => void;
  setTitle: (title: string) => void;
  setOptionMenuItems: (menuItems: Array<OptionMenuItem>) => void;
  showMessage: (message: Message) => void;
}

export default connect(mapStateToProps,
                       mapDispatchToProps)(withStyles(styles)(HomePage));
