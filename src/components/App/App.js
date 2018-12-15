import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import 'typeface-roboto';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Route path='/' exact component={Projects} />
                {/* <Route path='/admin' componenet={Admin} /> */}
            </div>
        </Router>
    );
  }
}

export default App;
