import React from 'react';
import { connect } from 'react-redux';
import Tile from '../Tile';
import { getTilesList } from '../../redux/selectors/board.selectors';
import { AppState } from '../../redux/reducers';
import { IBoard } from './Board.interfaces';

const Board = ({ tiles = [] }: IBoard) => (
  <div className="board">
    {tiles.map((tileId) => <Tile key={tileId} id={tileId} />)}
  </div>
);

const mapState = (state: AppState): IBoard => ({
  tiles: getTilesList(state),
});

export default connect(mapState)(Board);
