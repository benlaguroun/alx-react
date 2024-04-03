// App.js

import React from 'react';
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

function App() {
  const handleLabelClick = (event) => {
    const inputId = event.target.htmlFor;
    const inputElement = document.getElementById(inputId);
    if (inputElement) {
      inputElement.focus();
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src="holberton-logo.jpg" alt="Holberton Logo" />
        <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div className="input-container">
          <label htmlFor="email" onClick={handleLabelClick}>Email:</label>
          <input type="email" id="email" />
        </div>
        <div className="input-container">
          <label htmlFor="password" onClick={handleLabelClick}>Password:</label>
          <input type="password" id="password" />
        </div>
        <button>OK</button>
      </div>
      <footer className="App-footer">
        <p>{getFooterCopy(true)}</p>
        <p>{getFullYear()}</p>
      </footer>
    </div>
  );
}

export default App;

