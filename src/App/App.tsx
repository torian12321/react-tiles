import React from 'react';
import { Board } from '../components/Board';
import { BoardOptions } from '../components/BoardOptions';
import { BtnReset } from '../components/BtnReset';
import styles from './App.module.scss';

const App = () => (
  <div className={styles.App}>
    <div className={styles.content}>
      <BoardOptions />
      <Board />
      <BtnReset />
    </div>
  </div>
);

export default App;
