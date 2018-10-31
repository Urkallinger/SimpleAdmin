import React, {Component} from 'react';
import {connect} from 'react-redux';
import {dummyAction} from '../actions/Actions';

const mapStateToProps = state => {
    return {dummies: state.dummies};
};

const mapDispatchToProps = dispatch => {
    return {
        dummyAction: dummy => dispatch(dummyAction(dummy))
    };
};

class ConnectedHomePage extends Component {
    onClick = () => {
        this.props.dummyAction('superdummy');
    };

    render = () => {
        return (
            <div>
                <div>Home</div>
                <button onClick={this.onClick}>press me</button>
                <div>
                    {this.props.dummies.map(dummy => (
                        <div key={dummy}>{dummy}</div>
                    ))}
                </div>
            </div>
        );
    };
}

const HomePage = connect(mapStateToProps,
                         mapDispatchToProps)(ConnectedHomePage);
export default HomePage;
