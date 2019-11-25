import React from 'react';
import {Container} from 'react-bootstrap';
import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Carousel from './components/carousel'
import { Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Container style ={{borderStyle: 'solid', borderColor:'gold', borderWeight: '1px'}}>
        <Header text="Molly and Ryans Wedding" />
        <Carousel />
      </Container>
    </div>
  );
}

export default App;
