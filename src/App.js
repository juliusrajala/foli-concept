import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'
import './App.css';
import Home from './views/Home';
import Tickets from './views/Tickets';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/tickets" component={Tickets} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
