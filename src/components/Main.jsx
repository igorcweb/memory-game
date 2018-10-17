import React, { Component } from 'react';
import { shuffle } from '../utils';
import toons from '../toons.json';

export default class Main extends Component {
  state = {
    toons
  };

  getToonById = id => {
    return toons.find(toon => toon.id === id);
  };

  handleClick = id => {
    const toon = this.getToonById(id);
    const newToons = this.state.toons;
    newToons.forEach(t => {
      if (t.id === toon.id) {
        t.clicked = true;
      }
      this.setState({ toons: newToons });
    });
    console.log(this.state);
  };

  shuffleToons = () => {
    const shuffledToons = shuffle(toons);
    this.setState({ toons: shuffledToons });
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
