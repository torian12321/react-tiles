import {
  BOARD_RESET,
  BOARD_TOGGLE_COL,
  TILE_TOGGLE,
} from './action.types';
import { getTileById } from '../selectors/board.selectors';

export const boardReset = () => ({
  type: BOARD_RESET,
});

export const tileToggle = (id: string) => ({
  type: TILE_TOGGLE,
  payload: {
    id,
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
