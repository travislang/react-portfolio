import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Route path='/' exact componenet={Projects} />
                <Route path='/admin' componenet={Projects} />
            </div>
        </Router>
    );
  }
}

export default App;
