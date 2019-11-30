import React from 'react';
import { Container } from 'react-bootstrap';
import './App.css';
import Header from './components/header';
import Home from './containers/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <Header text="Molly and Ryans Wedding" />
      <Switch>
        <Route path="/registry">
          <h1>
            Registry
          </h1>
        </Route>
        <Route path="/story">
          <h1>
            About
            </h1>
        </Route>
        <Route path="/venue">
          <h1>
            Venue
          </h1>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
