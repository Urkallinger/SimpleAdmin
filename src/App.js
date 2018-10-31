import PropTypes from 'prop-types';
import React, {Component} from 'react';
import MenuBar from './components/MenuBar';
import {push} from 'connected-react-router';
import Routes from './Routes';

class App extends Component {
    goToHomePage = () => {
        window.store.dispatch(push('/home'));
    };

    render() {
        return (
            <div>
                <MenuBar />
                <div>
                    <Routes />
                </div>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object
};

export default App;
