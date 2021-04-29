import { TILE_TOGGLE, BOARD_RESET} from "../actions/action.types";
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

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
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

const reducer = (state = initialState, action: State & Action & any) => {
  switch (action.type) {
    case TILE_TOGGLE:
      const { id } = action;
      const tile = state.tiles.byIds[id];

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
    case BOARD_RESET:
      return initialState;
    default:
        return state;
  };
};

export default reducer;
