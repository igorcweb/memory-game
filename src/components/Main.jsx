import React, { Component } from 'react';
import { shuffle } from '../utils';
import toons from '../toons.json';

export default class Main extends Component {
  state = {
    toons
  };
  render() {
    const getToonById = id => {
      return toons.find(toon => toon.id === id);
    };
    //Shuffle ids
    const toonsIds = shuffle(toons.map(toon => toon.id));
    //Get images by id
    return toonsIds.map(toonId => {
      const toon = getToonById(toonId);
      console.log(toon.img);
      return (
        <img
          className="toon"
          key={toonId}
          src={require(`../images/${toon.img}`)}
          alt={toon.id}
        />
      );
    });
  }
}
