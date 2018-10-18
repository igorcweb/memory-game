import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';
import toons from './toons.json';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  state = {
    toons,
    score: 0,
    topScore: 0,
    message: 'Click an image to begin!'
  };
  render() {
    console.log(this.state);
    return (
      <Wrapper>
        <Nav
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Banner />
        <div className="Main">
          <Main toons={this.state.tunes} />
        </div>
        <Footer />
      </Wrapper>
    );
  }
}

export default App;
