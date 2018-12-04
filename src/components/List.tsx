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
  return {messages: state.ws.messages};
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
    const {classes, messages} = this.props;

    return (
      <div className={classes.root}>
        <MuiList component="nav">
          {messages.map((message, i) => (
            <React.Fragment key={i}>
              <ListItem key={i}>
                <ListItemText primary={`${message}`} />
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
  messages: Array<string>;
}

export default connect(mapStateToProps,
                       mapDispatchToProps)(withStyles(styles)(List));
