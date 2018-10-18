import React, { Component } from 'react';
import { shuffle } from '../utils';
import toons from '../toons.json';

let message = 'Click an image to begin!',
  score = 0,
  topScore = 0;

class Main extends Component {
  getToonById = id => {
    return toons.find(toon => toon.id === id);
  };

  shuffleToons = () => {
    const shuffledToons = shuffle(toons);
    this.setState({
      toons: shuffledToons,
      score: this.state ? this.state.score : score,
      topScore: this.state ? this.state.topScore : topScore,
      message: this.state ? this.state.message : message
    });
  };

  handleClick = id => {
    const toon = this.getToonById(id);
    const newToons = this.state.toons;
    let newMessage = this.state.message;
    console.log(newMessage);
    newToons.forEach(t => {
      if (t.id === toon.id) {
        if (toon.clicked === true) {
          newMessage = 'You already clicked on this one!';
          score = 0;
        } else {
          t.clicked = true;
          score++;
        }
      }
      this.setState({
        toons: newToons,
        message: newMessage
      });
    });
    console.log(this.state);
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

export default Main;
