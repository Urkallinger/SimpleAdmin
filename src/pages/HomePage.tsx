import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  dummyAction,
  setTitle,
  setOptionMenuItems,
  clearDummies,
  showMessage
} from '../actions/Actions';
import {Button, withStyles, WithStyles, createStyles, Theme} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import List from '../components/List';
import {isUndefinedOrEmpty} from '../utils/JsUtils';
import {Message} from '../model/Message';
import { OptionMenuItem } from '../model/OptionMenuItem';

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
  return {dummies: state.root.dummies};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setTitle: (title: string) => dispatch(setTitle(title)),
    setOptionMenuItems: (menuItems: Array<OptionMenuItem>) => dispatch(setOptionMenuItems(menuItems)),
    dummyAction: (dummy: string) => dispatch(dummyAction(dummy)),
    clearDummies: () => dispatch(clearDummies()),
    showMessage: (message: Message) => dispatch(showMessage(message))
  };
};

class HomePage extends Component<Props> {
  componentDidMount = () => {
    this.props.setTitle('Home');
    this.props.setOptionMenuItems([{label: 'clear dummies', onClick: this.onClearDummies}]);
  };

  componentWillUnmount = () => {
    this.props.setOptionMenuItems([]);
  };

  onClearDummies = () => {
    if (isUndefinedOrEmpty(this.props.dummies)) {
      this.props.showMessage(new Message('No dummies available to delete.'));
    } else {
      this.props.clearDummies();
      console.log('dummies cleared');
    }
  };

  onClick = () => {
    this.props.dummyAction('superdummy');
  };

  render = () => {
    const {classes} = this.props;
    return (
      <div>
        <List />
        <Button onClick={this.onClick} variant="fab" color="primary" className={classes.faceButton}>
          <FaceIcon />
        </Button>
      </div>
    );
  };
}

interface Props extends WithStyles<typeof styles> {
  dummies: Array<string>,
  dummyAction: (dummy: string) => void,
  setTitle: (title: string) => void,
  setOptionMenuItems: (menuItems: Array<OptionMenuItem>) => void,
  clearDummies: () => void,
  showMessage: (message: Message) => void,
}

export default connect(mapStateToProps,
                       mapDispatchToProps)(withStyles(styles)(HomePage));
