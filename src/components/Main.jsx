import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { shuffle } from '../utils';
import toons from '../toons.json';
import {
  increaseScore,
  resetScore,
  increaseTopScore,
  resetTopScore,
  setMessage
} from '../actions/game';

class Main extends Component {
  state = {
    toons
  };
  getToonById = id => {
    return toons.find(toon => toon.id === id);
  };

  shuffleToons = () => {
    const shuffledToons = [...shuffle(toons)];
    this.setState({
      toons: shuffledToons
    });
  };

  resetToons = toons => {
    toons.map(toon => (toon.clicked = false));
  };

  handleClick = id => {
    let { score, topScore } = this.props.game;
    const toon = this.getToonById(id);
    let newToons = this.state.toons;
    newToons.forEach(t => {
      if (t.id === toon.id) {
        if (toon.clicked === true) {
          this.resetToons(newToons);
          this.props.resetScore();
          this.props.setMessage('Try again!');
        } else {
          t.clicked = true;
          this.props.increaseScore();
          if (topScore <= score) {
            this.props.increaseTopScore();
          }
          if (score < 11) {
            this.props.setMessage('');
            setTimeout(() => {
              this.props.setMessage('Correct!');
            }, 100);
          } else {
            this.props.setMessage('You win!');
            this.resetToons(newToons);
            this.props.resetScore();
          }
        }
      }
    });
    this.shuffleToons();
  };

  componentWillMount() {
    this.shuffleToons();
  }

  render() {
    return this.state.toons.map(toon => {
      return (
        <img
          className="toon"
          key={toon.id}
          src={require(`../images/${toon.img}`)}
          alt={toon.id}
          onClick={() => this.handleClick(toon.id)}
        />
      );
    });
  }
}

const mapStateToProps = ({ game }) => {
  return {
    game
  };
};

const matchDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increaseScore,
      resetScore,
      increaseTopScore,
      resetTopScore,
      setMessage
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(Main);
