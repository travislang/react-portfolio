import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import 'typeface-roboto';
import Admin from '../Admin/Admin';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import lightBlue from '@material-ui/core/colors/lightBlue';
import deepOrange from '@material-ui/core/colors/deepOrange';
import { connect } from 'react-redux';

import AdminSnackbar from '../AdminSnackbar/AdminSnackbar';

const theme = createMuiTheme({
    palette: {
        primary: lightBlue,
        secondary: deepOrange,
    },
});

class App extends Component {
    // Renders the entire app on the DOM
    render() {
        const notification = this.props.reduxStore.notification;
        let snackbar;
        if(notification === 'none') {
        }
        else if (notification === 'success') {
            snackbar = <AdminSnackbar message='Your project has been added!' />
        }
        else if (notification === 'error') {
            snackbar = <AdminSnackbar message='Name, date & tag are required. Please Try again.' />
        }
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <div className="App">
                        <Header />
                        <div className='app-wrapper'>
                            <Route path='/' exact component={Projects} />
                            <Route path='/admin' component={Admin} />
                        </div>
                        {snackbar}
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    }
}

const mapReduxStateToProps = (reduxStore) => ({
    reduxStore
})
export default connect(mapReduxStateToProps)(App);
