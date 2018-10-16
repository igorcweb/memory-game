import React, { Component } from 'react';

export default class Main extends Component {
  render() {
    const images = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    return images.map(image => {
      return <img src={require(`../images/${image}.png`)} alt={image} />;
    });
  }
}
