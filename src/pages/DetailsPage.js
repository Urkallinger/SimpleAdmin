import {Button, withStyles} from '@material-ui/core';
import MessageIcon from '@material-ui/icons/Message';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setTitle, showMessage} from '../actions/Actions';
import {Message} from '../model/Message';

const styles = () => ({
  msgButton: {
    position: 'fixed',
    bottom: 10,
    right: 10
  }
});

const mapDispatchToProps = dispatch => {
  return {
    setTitle: title => dispatch(setTitle(title)),
    showMessage: message => dispatch(showMessage(message))
  };
};

class DetailsPage extends Component {
  componentDidMount = () => {
    this.props.setTitle('Details');
  };

  onClick = () => {
    this.props.showMessage(new Message('das ist die nachricht'));
  };

  render = () => {
    const {classes} = this.props;
    return (
      <div>
        <Button onClick={this.onClick} variant="fab" color="primary" className={classes.msgButton}>
          <MessageIcon />
        </Button>
      </div>
    );
  };
}

DetailsPage.propTypes = {
  setTitle: PropTypes.func,
  showMessage: PropTypes.func,

  classes: PropTypes.object.isRequired // material-ui
};

export default connect(null,
                       mapDispatchToProps)(withStyles(styles)(DetailsPage));
