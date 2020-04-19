import React from 'react';
import logo from './logo.svg';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Link to="/login" style={{color: '#0366d6'}}>Login</Link> to get started!
        </p>
      </header>
    </div>
  );
}

export default App;
