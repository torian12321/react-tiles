import { createSelector } from 'reselect';
import { AppState } from '../reducers';
import { State as StateBoard, Options, Tile } from '../reducers/board.reducers';

const getBoard = (state: AppState): StateBoard =>
  state.board || {};

const getTiles = createSelector(
  getBoard,
  (board: StateBoard): Tile[] =>
  board.tiles || []
);

export const getTileById = (state: AppState, id: string): Tile | {} =>
  getTiles(state)
    .find((tile: Tile) => tile.id === id)
    || {};

export const getOptions = createSelector(
  getBoard,
  (board: StateBoard): Options =>
  board.options || {}
);
