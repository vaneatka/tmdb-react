import React from 'react';
import logo from './logo.svg';
import './App.css';
import {get_specific,get_movies_by_keyword} from './services/request'

function App() {
  get_movies_by_keyword("genre", 10749);
  get_specific("movie", 420817);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
