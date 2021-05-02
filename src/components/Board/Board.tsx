import React from 'react';
import Tile from '../Tile';
import { Props, State, IBoardRow } from './Board.interfaces';
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

const Board: React.FunctionComponent<Props & State> = ({
  tiles = [],
  columns,
  onMouseLeave = () => {},
}: Props & State) => {
  const handleOnMouseLeave = () => {
    onMouseLeave();
  }
  const renderRows = () => (
    arrayTo2DArray2(tiles, columns)
      .map((tilesInRow: any, i: number) => <Row key={`row_${i}`} tiles={tilesInRow} />)
  );

  return (
    <div className={styles.board} onMouseLeave={handleOnMouseLeave}>
      {renderRows()}
    </div>
  );
};

export default Board;
