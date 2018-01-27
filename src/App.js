import React, { Component } from 'react';
import Header from './Header';
import Body from './Body';
import ApplicationButton from './Button';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className={'App'}>
        <Header />
        <Body />
        <ApplicationButton />
      </div>
    );
  }
}

export default App;
