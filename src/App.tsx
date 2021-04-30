import React from 'react';
import { Board } from './components/Board';
import { BtnReset } from './components/BtnReset';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <Board />
      <BtnReset />
    </header>
  </div>
);

export default App;
