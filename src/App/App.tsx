import React, { useEffect } from 'react';
import axios from 'axios';
import { Board } from '../components/Board';
import { BtnReset } from '../components/BtnReset';
import useDebounce from '../hooks/useDebounce';
import { Props } from './App.interfaces';
import styles from './App.module.scss';

const App = ({ tiles }: Props) => {
  const savedTiles = useDebounce(tiles, 2000);

  useEffect(() => {
    console.log('aaaa', savedTiles)
    axios.post('https://postman-echo.com/get?foo1=bar1&foo2=bar2', {
      tiles: savedTiles,
      firstName: 'Fred',
      lastName: 'Flintstone'
    })
    .then(function (response: any) {
      console.log(response);
    })
    .catch(function (error: Error) {
      console.log(error);
    });

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
