import React from 'react';
import '../App.css';

const Wrapper = props => {
  return <div className="wrapper">{props.children}</div>;
};

export default Wrapper;
