import React, { useEffect } from 'react';
import { Board } from '../components/Board';
import { BtnReset } from '../components/BtnReset';
import useDebounce from '../hooks/useDebounce';
import { Props } from './App.interfaces';
import styles from './App.module.scss';

const App = ({ tiles }: Props) => {
  const savedTiles = useDebounce(tiles, 2000);

  useEffect(() => {
    console.log('aaaa', savedTiles)
  }, [savedTiles])

  return (
    <div className={styles.App}>
      <div className={styles.content}>
        <Board />
        <BtnReset />
      </div>
    </div>
  );
};

export default App;
