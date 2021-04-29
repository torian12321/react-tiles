// @ts-ignore
import { createStore } from "redux";
import rootReducer from "../reducers";

interface IAction {
  type?: string;
  payload?: any;
}

const registerReduxDevtools = () => {
  const w: any = window;
  return w.__REDUX_DEVTOOLS_EXTENSION__ && w.__REDUX_DEVTOOLS_EXTENSION__()
}

const store = createStore(
  rootReducer,
  registerReduxDevtools()
// +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
