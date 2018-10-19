import React, { Component } from 'react';
import { connect } from 'react-redux';

class Nav extends Component {
  render() {
    const { score, topScore, message } = this.props.game;
    return (
      <ul className="nav">
        <a href="/">
          <li className="title">Clicky Game</li>
        </a>
        <li className="message">{message}</li>
        <li className="score">
          Score: <span id="score">{score}</span> | Top Score:{' '}
          <span id="top-score">{topScore}</span>
        </li>
      </ul>
    );
  }
}

const mapStateToProps = ({ game }) => {
  return {
    game
  };
};

export default connect(mapStateToProps)(Nav);
