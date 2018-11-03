import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core';
import {setTitle} from '../actions/Actions';
import {connect} from 'react-redux';

const styles = () => ({});

const mapDispatchToProps = dispatch => {
  return {
    setTitle: title => dispatch(setTitle(title))
  };
};

class DetailsPage extends Component {
  componentDidMount = () => {
    this.props.setTitle('Details');
  };

  render = () => {
    return (
      <div>
      </div>
    );
  };
}

DetailsPage.propTypes = {
  setTitle: PropTypes.func,

  classes: PropTypes.object.isRequired // material-ui
};

export default connect(null,
                       mapDispatchToProps)(withStyles(styles)(DetailsPage));
