import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Header from '../Header/Header';
import Projects from '../Projects/Projects';
import 'typeface-roboto';
import Admin from '../Admin/Admin';

class App extends Component {
  // Renders the entire app on the DOM
  render() {
    return (
        <Router>
            <div className="App">
                <Header />
                <div className='app-wrapper'>
                    <Route path='/' exact component={Projects} />
                    <Route path='/admin' component={Admin} />
                </div>
            </div>
        </Router>
    );
  }
}

export default App;
