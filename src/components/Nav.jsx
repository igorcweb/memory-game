import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <ul className="nav">
        <a href="/">
          <li>Clicky Game</li>
        </a>
        <li className="begin">{this.props.message}</li>
        <li>
          Score: <span id="score">{this.props.score}</span> | Top Score:{' '}
          <span id="top-score">{this.props.topScore}</span>
        </li>
      </ul>
    );
  }
}

export default Nav;
