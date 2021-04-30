import { TILE_TOGGLE, BOARD_TOGGLE_COL } from './action.types';
import { getTileById } from '../selectors/board.selectors';

export const tileToggle = (id: string) => ({
  type: TILE_TOGGLE,
  id,
});

export const columnToggle = (id: string): Object => (
  dispatch: any,
  getState: Function
) => {
    const tile = getTileById(getState(), id);

    return dispatch({
      type: BOARD_TOGGLE_COL,
      payload: {
        col: tile.y,
        active: tile.active,
      }
    });
  };
