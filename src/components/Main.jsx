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
    console.log(toon.id);
    this.state.toons.forEach((t, index) => {
      if (t.id === toon.id) {
        console.log(this.state.toons[index]);
        this.setState({ [this.state.toons[index]]: { clicked: true } });
      }
    });
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
