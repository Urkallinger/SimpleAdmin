import {withStyles, Button} from '@material-ui/core';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import MenuBar from './components/MenuBar';
import {push} from 'connected-react-router';

const styles = {
    content: {
        padding: 10
    }
};

class App extends Component {
    goToHomePage = () => {
        window.store.dispatch(push('/home'));
    };

    render() {
        const {classes} = this.props;
        return (
            <div>
                <MenuBar>App</MenuBar>
                <div className={classes.content}>
                    <Button color="secondary" variant="contained" onClick={this.goToHomePage}>
                        HomePage
                    </Button>
                </div>
            </div>
        );
    }
}

App.propTypes = {
    classes: PropTypes.object
};

export default withStyles(styles)(App);
