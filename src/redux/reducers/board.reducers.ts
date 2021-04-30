import { TILE_TOGGLE, BOARD_RESET, BOARD_TOGGLE_COL } from "../actions/action.types";
import { getTileById, getTileByCol } from '../selectors/board.selectors';
import { Action } from './';

export interface Tile {
  id: string,
  x: number,
  y: number,
  active: boolean,
};
export interface Tiles {
  allIds: string[],
  byIds: {
    [key: string]: Tile,
  }
};
export interface Options {
  columns: number,
  rows: number
};

export interface State {
  tiles: Tiles,
  options: Options
};

const buildBoard2 = (size: number): Tiles => {
  const byIds: { [key: string]: Tile } = {};
  const allIds = []
  var count = 0;

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {  
      const id = count.toString();
      allIds.push(id);
      byIds[count] = {
        id,
        x,
        y,
        active: false,
      };

      count++;
    };
  };

  return {
    allIds,
    byIds,
  };
}

const iniSize = 6;
const initialState: State = {
  tiles: buildBoard2(iniSize),
  options: {
    columns: iniSize,
    rows: iniSize,
  }
};

const reducer = (state: any = initialState, action: State & Action & any) => {
  switch (action.type) {
    case TILE_TOGGLE:
      const { id } = action;
      const tile = getTileById(state, id);

      return {
        ...state,
        tiles: {
          ...state.tiles,
          byIds: {
            ...state.tiles.byIds,
            [id]: {
              ...tile,
              active: !tile.active,
            }
          }
        }
      };
  
      case BOARD_TOGGLE_COL:
        const { col, active } = action.payload;
        const updatedTiles: any = {};

        getTileByCol(state, col).forEach(tile => {
          updatedTiles[tile.id] = {
            ...tile,
            active: active,
          }
        });

        return {
          ...state,
          tiles: {
            ...state.tiles,
            byIds: {
              ...state.tiles.byIds,
              ...updatedTiles,
            }
          }
        };
  
    case BOARD_RESET:
      return initialState;
    default:
        return state;
  };
};

export default reducer;
