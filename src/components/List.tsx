import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {
  List as MuiList,
  withStyles,
  ListItem,
  ListItemText,
  Divider,
  Theme,
  createStyles,
  WithStyles
} from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    debugBorder: {
      border: '1px solid black'
    },
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper
    }
  });

const mapStateToProps = (state: any) => {
  return {dummies: state.root.dummies};
};

const mapDispatchToProps = () => {
  return {};
};

class List extends Component<Props> {
  constructor(props: Props) {
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
                <ListItemText primary={`${dummy}`} />
              </ListItem>
              <Divider />
            </React.Fragment>
          ))}
        </MuiList>
      </div>
    );
  };
}

interface Props extends WithStyles<typeof styles> {
  dummies: Array<string>;
}

export default connect(mapStateToProps,
                       mapDispatchToProps)(withStyles(styles)(List));
