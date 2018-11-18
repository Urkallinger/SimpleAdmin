import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {List as MuiList, withStyles, ListItem, ListItemText, Divider} from '@material-ui/core';

const styles = theme => ({
  debugBorder: {
    border: '1px solid black'
  },
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper
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
    const {classes, dummies} = this.props;

    return (
      <div className={classes.root}>
        <MuiList component="nav">
          {dummies.map((dummy, i) => (
            <React.Fragment key={i}>
              <ListItem key={i}>
                <ListItemText primary={`dummy ${i}`} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </MuiList>
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
