import React from 'react';
import Tile from '../Tile';
import { IBoard, IBoardRow } from './Board.interfaces';
import styles from './Board.module.scss';

const arrayTo2DArray2 = (list: string[], howMany: number) => {
  let idx = 0;
  const result: any = [];

  while (idx < list.length) {
    if (idx % howMany === 0) result.push([]);
    result[result.length - 1].push(list[idx++]);
  };

  return result;
}

const Row = ({ tiles = [] }: IBoardRow) => (
  <div className={styles.row}>
    {tiles.map((tileId) => <Tile key={tileId} id={tileId} />)}
  </div>
);

const Board = ({ tiles = [], columns }: IBoard) => {
  const renderRows = () => (
    arrayTo2DArray2(tiles, columns)
      .map((tilesInRow: any, i: number) => <Row key={`row_${i}`} tiles={tilesInRow} />)
  );

  return (
    <div className={styles.board}>
      {renderRows()}
    </div>
  );
};

export default Board;
