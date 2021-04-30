import React from 'react';
import Tile from '../Tile';
import { IBoard } from './Board.interfaces';
import styles from './Board.module.scss';

const Board = ({ tiles = [] }: IBoard) => (
  <div className={styles.board}>
    {tiles.map((tileId) => <Tile key={tileId} id={tileId} />)}
  </div>
);

export default Board;
