import { AppState } from '../reducers';
import { State as StateCommon } from '../reducers/common.reducers';

export const getCommon = (state: AppState): StateCommon =>
  state.common || {};
