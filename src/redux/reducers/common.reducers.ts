import { ADD_ARTICLE } from "../actions/action.types";

interface Action {
  type: string,
}
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
