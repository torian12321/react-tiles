import { ADD_ARTICLE } from "../actions/action.types";
import { Action } from './';
export interface State {
  name: string,
}

const initialState: State = {
  name: 'aitor',
};

const reducer = (state = initialState, action: State & Action) => {
  switch (action.type) {
    case ADD_ARTICLE:
      return state;
    default:
      return state;
  };
};

export default reducer;
