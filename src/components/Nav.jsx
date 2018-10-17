import React, { Component } from 'react';

class Nav extends Component {
  state = {
    score: 0,
    topScore: 0,
    message: 'Click an image to begin!'
  };
  render() {
    return (
      <ul className="nav">
        <a href="/">
          <li>Clicky Game</li>
        </a>
        <li className="begin">{this.state.message}</li>
        <li>
          Score: <span id="score">{this.state.score}</span> | Top Score:{' '}
          <span id="top-score">{this.state.topScore}</span>
        </li>
      </ul>
    );
  }
}

export default Nav;
