import {
  TILES_TOGGLE,
  BOARD_RESET,
  BOARD_SELECTEDAREA_UNSET,
  BOARD_SELECTEDAREA_SET_INI,
  BOARD_SELECTEDAREA_SET_END,
} from "../actions/action.types";
import { getTileById } from '../selectors/board.selectors';
import { Action } from './';

export interface Tile {
  id: string,
  x: number,
  y: number,
  flipped: boolean,
};
export interface Tiles {
  allIds: string[],
  byIds: {
    [key: string]: Tile,
  },
};
export interface Options {
  columns: number,
  rows: number,
};
export interface SelectedArea {
  iniTile?: string,
  endTile?: string,
};

export interface State {
  tiles: Tiles,
  options: Options,
  selectedArea: SelectedArea,
};

const buildBoard2 = (size: number): Tiles => {
  const byIds: { [key: string]: Tile } = {};
  const allIds = [];
  var count = 0;

  for (let x = 0; x < size; x++) {
    for (let y = 0; y < size; y++) {  
      const id = count.toString();
      allIds.push(id);
      byIds[count] = {
        id,
        x,
        y,
        flipped: false,
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
const iniSelectedArea = {
  iniTile: undefined,
  endTile: undefined,
};
const initialState: State = {
  tiles: buildBoard2(iniSize),
  options: {
    columns: iniSize,
    rows: iniSize,
  },
  selectedArea: iniSelectedArea,
};

const reducer = (state: any = initialState, action: State & Action) => {
  switch (action.type) {  
      case TILES_TOGGLE:
        const { ids = [], flipped } = action.payload;
        const updatedTiles: any = {};

        ids.forEach((id: string) => {
          const tile = getTileById(state, id);
          updatedTiles[tile.id] = {
            ...tile,
            flipped,
          };
        });

        return {
          ...state,
          tiles: {
            ...state.tiles,
            byIds: {
              ...state.tiles.byIds,
              ...updatedTiles,
            },
          },
        };

    case BOARD_SELECTEDAREA_SET_INI:
      const { iniTile = undefined } = action.payload;

      return {
        ...state,
        selectedArea: {
          ...state.selectedArea,
          iniTile,
        },
      };
    case BOARD_SELECTEDAREA_SET_END:
      const { endTile = undefined } = action.payload;

      return {
        ...state,
        selectedArea: {
          ...state.selectedArea,
          endTile,
        },
      };

    case BOARD_SELECTEDAREA_UNSET:
      return {
        ...state,
        selectedArea: iniSelectedArea,
      };

    case BOARD_RESET:
      return initialState;
    default:
        return state;
  };
};

export default reducer;
