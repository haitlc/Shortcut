import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ReactShortcuts  from "./page/reactShortcuts";
import ReactHotkeys    from "./page/reactHotkeys";
import KeyEvent        from "./page/keyEvent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <ReactShortcuts/>
        <ReactHotkeys/>
        <KeyEvent/>
      </div>
    );
  }
}

export default App;
