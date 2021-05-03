import React from 'react';
import { Board } from '../components/Board';
import { BtnReset } from '../components/BtnReset';
import styles from './App.module.scss';

const App = () => (
  <div className={styles.App}>
    <div className={styles.content}>
      <Board />
      <BtnReset />
    </div>
  </div>
);

export default App;
