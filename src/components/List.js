import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core';

const styles = () => ({
  debugBorder: {
    border: '1px solid black'
  }
});

const mapStateToProps = state => {
  return {dummies: state.root.dummies};
};

const mapDispatchToProps = () => {
  return {};
};

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => {
    const {classes} = this.props;
    const {dummies} = this.props;
    return (
      <div className={classes.debugBorder}>
        {dummies.map((dummy, i) => (
          <div key={i}>dummy</div>
        ))}
      </div>
    );
  };
}

List.propTypes = {
  dummies: PropTypes.array,
  classes: PropTypes.object.isRequired // material-ui
};

export default connect(mapStateToProps,
                       mapDispatchToProps)(withStyles(styles)(List));
