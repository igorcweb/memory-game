import React, { Component } from 'react';
import { shuffle } from '../utils';
import toons from '../toons.json';

export default class Main extends Component {
  state = {
    toons
  };

  handleClick = id => {
    console.log(id);
  };

  getToonById = id => {
    return toons.find(toon => toon.id === id);
  };

  shuffleTunes = () => {
    const shuffledToons = shuffle(toons);
    this.setState({ toons: shuffledToons });
  };

  componentWillMount() {
    this.shuffleTunes();
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
