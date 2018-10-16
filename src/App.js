import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Banner />
        <Main />
      </div>
    );
  }
}

export default App;
