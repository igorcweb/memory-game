import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Banner />
      </div>
    );
  }
}

export default App;
