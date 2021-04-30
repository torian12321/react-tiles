import { createSelector } from 'reselect';
import { AppState } from '../reducers';
import { State as StateBoard, Options, Tile, Tiles } from '../reducers/board.reducers';

const getBoardState = (state: AppState): StateBoard =>
  state.board || state || {};

export const getOptions = createSelector(
  getBoardState,
  (board: StateBoard): Options =>
  board.options || {}
);

// Tiles Selectors
const getTilesState = createSelector(
  getBoardState,
  (board: StateBoard): Tiles =>
  board.tiles || {}
);

export const getTilesList = createSelector(
  getTilesState,
  (tiles: Tiles): string[] =>
  tiles.allIds || []
);
const getTilesById = createSelector(
  getTilesState,
  (tiles: Tiles): any =>
  tiles.byIds || {}
);

export const getTileById = (state: AppState, id: string): Tile =>
  getTilesById(state)[id] || {};

export const getTileByCol = (state: AppState, col: number): Tile[] => {
  const byId = getTilesState(state).byIds || {};

  return Object.values(byId)
    .filter((tile: Tile) => tile.y === col);
};

export const getFlippedTiles = createSelector(
  getTilesById,
  (tiles: Tiles): string[] =>
    Object.values(tiles)
      .filter((tile: Tile) => !!tile.flipped)
      .map((tile: Tile) => tile.id)
);

