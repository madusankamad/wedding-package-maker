import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/css/style.css';
import {getMagazineInfo,getEnlargementInfo} from "./api_services/magazineApi"

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <button onClick={getMagazineInfo} value="get Magazine Info"/>
          <button onClick={getEnlargementInfo} value="Enlargement Info"/>
      </div>
    );
  }
}

export default App;
