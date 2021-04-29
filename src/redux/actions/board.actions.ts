import { TILE_TOGGLE} from './action.types';

export const tileToggle = (id: string) => ({
  type: TILE_TOGGLE,
  id,
});
