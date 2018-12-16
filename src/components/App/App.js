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

const theme = createMuiTheme({
    palette: {
        primary: lightBlue,
        secondary: deepOrange,
    },
});

class App extends Component {
    // Renders the entire app on the DOM
    render() {
        return (
            <Router>
                <MuiThemeProvider theme={theme}>
                    <div className="App">
                        <Header />
                        <div className='app-wrapper'>
                            <Route path='/' exact component={Projects} />
                            <Route path='/admin' component={Admin} />
                        </div>
                    </div>
                </MuiThemeProvider>
            </Router>
        );
    }
}

export default App;
