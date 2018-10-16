import React, { Component } from 'react';

class Nav extends Component {
  render() {
    return (
      <ul class="nav">
        <a href="/">
          <li>Clicky Game</li>
        </a>
        <li class="begin">Click an image to begin!</li>
        <li>
          Score: <span id="score" /> | Top Score: <span id="top-score" />
        </li>
      </ul>
    );
  }
}

export default Nav;
