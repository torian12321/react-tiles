// import { } from "../actions/action.types";
import { Action } from './';
export interface State {
  name: string,
}

const initialState: State = {
  name: 'Tiles App',
};

const reducer = (state = initialState, action: State & Action) => {
  switch (action.type) {
    default:
      return state;
  };
};

export default reducer;
