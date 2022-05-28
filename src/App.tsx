import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://vk.com/penkinavl"
          target="_blank"
          rel="noopener noreferrer"
        >
          Привет, медик!
        </a>
      </header>
    </div>
  );
}

export default App;
