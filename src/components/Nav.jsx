import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <ul className="nav">
        <a href="/">
          <li>Clicky Game</li>
        </a>
        <li className="begin">Click an image to begin!</li>
        <li>
          Score: <span id="score" /> | Top Score: <span id="top-score" />
        </li>
      </ul>
    );
  }
}

export default Nav;
