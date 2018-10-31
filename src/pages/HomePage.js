import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {dummyAction, setTitle, setMenuItems, clearDummies} from '../actions/Actions';
import {Button, withStyles} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import {push} from 'connected-react-router';

const styles = () => ({
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
        setTitle: title => dispatch(setTitle(title)),
        setMenuItems: menuItems => dispatch(setMenuItems(menuItems)),
        dummyAction: dummy => dispatch(dummyAction(dummy)),
        clearDummies: () => dispatch(clearDummies())
    };
};

class HomePage extends Component {
    componentDidMount = () => {
        this.props.setTitle('Home');
        this.props.setMenuItems([{label: 'clear dummies', onClick: this.onClearDummies}]);
    };

    componentWillUnmount = () => {
        this.props.setMenuItems([]);
    }

    onClearDummies = () => {
        this.props.clearDummies();
        console.log('dummies cleared');
    };

    onClick = () => {
        this.props.dummyAction('superdummy');
    };

    goToDetails = () => {
        window.store.dispatch(push('/details'));
    };

    render = () => {
        const {classes} = this.props;
        return (
            <div>
                <Button color="secondary" variant="contained" onClick={this.goToDetails}>
                    Details
                </Button>
                <div className={classes.output}>
                    {this.props.dummies.map((dummy, idx) => (
                        <div key={idx}>{dummy}</div>
                    ))}
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
    setTitle: PropTypes.func,
    setMenuItems: PropTypes.func,
    clearDummies: PropTypes.func,

    classes: PropTypes.object.isRequired // material-ui
};

export default connect(mapStateToProps,
                       mapDispatchToProps)(withStyles(styles)(HomePage));
