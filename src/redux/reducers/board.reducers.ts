import { ADD_ARTICLE, BOARD_RESET} from "../actions/action.types";

interface Action {
  type: string,
};

export interface Tile {
  id: string,
  x: number,
  y: number,
  active: boolean,
}
export interface Options {
  columns: number,
  rows: number
};

export interface State {
  tiles: Tile[],
  options: Options
};

const buildBoard = (size: number): Tile[] => {
  const tilesArr: Tile[] = [];
  var count = 0;

  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      tilesArr.push({
        id: count.toString(),
        x,
        y,
        active: false,
      });

      count++;
    };
  };

  return tilesArr;
}

const iniSize = 6;
const initialState: State = {
  tiles: buildBoard(iniSize),
  options: {
    columns: iniSize,
    rows: iniSize,
  }
};

const reducer = (state = initialState, action: State & Action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return state;
    case BOARD_RESET:
      return initialState;
    default:
        return state;
  };
};

export default reducer;
