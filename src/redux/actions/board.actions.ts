import {
  BOARD_RESET,
  BOARD_TOGGLE_COL,
  TILE_TOGGLE,
  BOARD_SELECTEDAREA_SET_INI,
  BOARD_SELECTEDAREA_SET_END,
} from './action.types';
import { getTileById } from '../selectors/board.selectors';

export const boardReset = () => ({
  type: BOARD_RESET,
});

export const tileToggle = (tileId: string) => ({
  type: TILE_TOGGLE,
  payload: {
    id: tileId,
  },
});

// Flip the full column from the indicated tale
export const columnToggle = (tileId: string): Object => (
  dispatch: any,
  getState: Function
) => {
    const tile = getTileById(getState(), tileId);

    return dispatch({
      type: BOARD_TOGGLE_COL,
      payload: {
        col: tile.y,
        flipped: !tile.flipped,
      }
    });
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
