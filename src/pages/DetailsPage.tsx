import {Button, withStyles, Theme, createStyles, WithStyles} from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setTitle, showMessage} from '../actions/Actions';
import {Message} from '../model/Message';

const styles = (theme: Theme) =>
  createStyles({
    msgBtn: {
      position: 'fixed',
      bottom: 10,
      right: 10
    },
    fabMoveUp: {
      transform: 'translate3d(0, -55px, 0)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.enteringScreen,
        easing: theme.transitions.easing.easeOut
      })
    },
    fabMoveDown: {
      transform: 'translate3d(0, 0, 0)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.leavingScreen,
        easing: theme.transitions.easing.sharp
      })
    }
  });

const mapStateToProps = (state: any) => {
  return {msgShown: state.root.message ? true : false};
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setTitle: (title: string) => dispatch(setTitle(title)),
    showMessage: (message: Message) => dispatch(showMessage(message))
  };
};

class DetailsPage extends Component<Props> {
  componentDidMount = () => {
    this.props.setTitle('Details');
  };

  onClick = () => {
    this.props.showMessage(new Message('das ist die nachricht'));
  };

  render = () => {
    const {classes, msgShown} = this.props;
    const fabClass = classNames(classes.msgBtn, msgShown ? classes.fabMoveUp : classes.fabMoveDown);

    return (
      <div>
        <Button onClick={this.onClick} variant="fab" color="primary" className={fabClass}>
          <MessageIcon />
        </Button>
      </div>
    );
  };
}

interface Props extends WithStyles<typeof styles> {
  setTitle: (title: string) => void,
  showMessage: (message: Message) => void,
  msgShown: boolean,
}

export default connect(mapStateToProps,
                       mapDispatchToProps)(withStyles(styles)(DetailsPage));
