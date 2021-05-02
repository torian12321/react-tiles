import {
  BOARD_RESET,
  TILES_TOGGLE,
  BOARD_SELECTEDAREA_SET_INI,
  BOARD_SELECTEDAREA_SET_END,
} from './action.types';
import { getTileById, getTileByCol } from '../selectors/board.selectors';
import { Tile } from '../reducers/board.reducers';

export const boardReset = () => ({
  type: BOARD_RESET,
});

export const tilesToggle = (
  tilesId: string[] = [],
  flipped: boolean = false
) => ({
  type: TILES_TOGGLE,
  payload: {
    ids: tilesId,
    flipped,
  },
});

export const tileToggle = (tileId: string): Object => (
  dispatch: any,
  getState: Function
) => {
  const state = getState();
  const tile = getTileById(state, tileId);

  dispatch(tilesToggle(
    [tile.id],
    !tile.flipped
  ));
};

// Flip the full column from the indicated tale
export const columnToggle = (tileId: string): Object => (
  dispatch: any,
  getState: Function
) => {
  const state = getState();
  const tile = getTileById(state, tileId);

  dispatch(tilesToggle(
    getTileByCol(state, tile.y).map((t: Tile) => t.id),
    !tile.flipped
  ));
};


export const boardSelectedAreaSetIniTile = (tileId: string) => ({
  type: BOARD_SELECTEDAREA_SET_INI,
  payload: {
    iniTile: tileId,
  },
});
export const boardSelectedAreaSetEndTile = (tileId: string) => ({
  type: BOARD_SELECTEDAREA_SET_END,
  payload: {
    endTile: tileId,
  },
});
