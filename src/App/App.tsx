import React, { useEffect } from 'react';
import axios from 'axios';
import { get } from 'lodash';
import { Board } from '../components/Board';
import { BoardOptions } from '../components/BoardOptions';
import { BtnReset } from '../components/BtnReset';
import useDebounce from '../hooks/useDebounce';
import { Props } from './App.interfaces';
import styles from './App.module.scss';

const App = ({ tiles }: Props) => {
  // The app will save (wit a debounce) the state of the board, and print
  // the returned value into the console.

  // TODO: add some validation to check if previous saved value is
  // identical to the previous one, and don't save the value if so

  const savedTiles = useDebounce(tiles, 2000);

  useEffect(() => {
    axios
      .post('https://postman-echo.com/post', {
        tiles: savedTiles,
      })
      .then((response: Object) => {
        console.log(get(response, 'data.data.tiles', []));
      })
      .catch((error: Error) => {
        console.log(error);
      });

  }, [savedTiles])

  return (
    <div className={styles.App}>
      <div className={styles.content}>
        <BoardOptions />
        <Board />
        <BtnReset />
      </div>
    </div>
  );
};

export default App;
