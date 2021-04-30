import { combineReducers } from 'redux';
import board, { State as StateBoard } from './board.reducers';
import common, { State as StateCommon } from './common.reducers';

export interface AppState {
  board: StateBoard,
  common: StateCommon,
}

export interface Action {
  type: string,
  payload: {
    [key: string]: any,
  },
}

const rootReducer = combineReducers({
  common,
  board,
});


export default rootReducer;
