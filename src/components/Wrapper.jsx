import React, { Component } from 'react';
import '../App.css';
import toons from '../toons.json';
import Nav from './Nav';
import Banner from './Banner';
import Main from './Main';
import Footer from './Footer';

class Wrapper extends Component {
  state = {
    score: 0,
    topScore: 0,
    message: 'Click an image to begin!',
    toons
  };
  render() {
    return (
      <div>
        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Banner />
        <div className="Main">
          <Main />
        </div>
        <Footer />
      </div>
    );
  }
}

export default Wrapper;
