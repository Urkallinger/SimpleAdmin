import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {dummyAction} from '../actions/Actions';
import MenuBar from '../components/MenuBar';
import {Button, withStyles} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import {push} from 'connected-react-router';

const styles = () => ({
    content: {
        padding: 10
    },
    faceButton: {
        position: 'absolute',
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

const mapStateToProps = state => {
    return {dummies: state.dummies};
};

const mapDispatchToProps = dispatch => {
    return {
        dummyAction: dummy => dispatch(dummyAction(dummy))
    };
};

class HomePage extends Component {
    onClick = () => {
        this.props.dummyAction('superdummy');
    };

    goToApp = () => {
        window.store.dispatch(push('/'));
    };

    render = () => {
        const {classes} = this.props;
        return (
            <div>
                <MenuBar>Details</MenuBar>
                <div className={classes.content}>
                    <Button color="secondary" variant="contained" onClick={this.goToApp}>
                        App
                    </Button>
                    <div className={classes.output}>
                        {this.props.dummies.map((dummy, idx) => (
                            <div key={idx}>{dummy}</div>
                        ))}
                    </div>
                </div>

                <Button
                    onClick={this.onClick}
                    variant="fab"
                    color="primary"
                    className={classes.faceButton}
                >
                    <FaceIcon />
                </Button>
            </div>
        );
    };
}

HomePage.propTypes = {
    dummies: PropTypes.array,
    dummyAction: PropTypes.func,

    classes: PropTypes.object.isRequired // material-ui
};

export default connect(mapStateToProps,
                       mapDispatchToProps)(withStyles(styles)(HomePage));
