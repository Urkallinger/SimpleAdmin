import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {dummyAction, setTitle} from '../actions/Actions';
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
        dummyAction: dummy => dispatch(dummyAction(dummy)),
        setTitle: title => dispatch(setTitle(title))
    };
};

class HomePage extends Component {
    componentDidMount = () => {
        this.props.setTitle('Home');
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
                <div className={classes.content}>
                    <Button color="secondary" variant="contained" onClick={this.goToDetails}>
                        Details
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
    setTitle: PropTypes.func,

    classes: PropTypes.object.isRequired // material-ui
};

export default connect(mapStateToProps,
                       mapDispatchToProps)(withStyles(styles)(HomePage));
