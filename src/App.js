import React from 'react';
import './App.css';
import Footer from './Footer';
import Home from './Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Explore from './Explore';
import Navbar from './Navbar';

function App() {
  return (
    <div className="app">
      <Router >
        <Switch>
          <Route path="/explore" >
            <Navbar explore />
            <Explore />
            <Footer />
          </Route>
          <Route path="/" >
            <Home />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;