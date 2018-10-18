import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Nav from './components/Nav';
import Banner from './components/Banner';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <React.Fragment>
          <Nav />
          <Banner />
          <div className="Main">
            <Main />
          </div>
          <Footer />
        </React.Fragment>
      </Provider>
    );
  }
}

export default App;
