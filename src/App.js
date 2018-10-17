import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Banner />
        <div className="main">
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
