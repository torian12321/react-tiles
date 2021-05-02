import { createSelector } from 'reselect';
import { AppState } from '../reducers';
import { State as StateBoard, Options, SelectedArea, Tile, Tiles } from '../reducers/board.reducers';

const getBoardState = (state: AppState): StateBoard =>
  state.board || state || {};

export const getOptions = createSelector(
  getBoardState,
  (board: StateBoard): Options =>
  board.options || {}
);

const getSelectedArea = createSelector(
  getBoardState,
  (board: StateBoard): SelectedArea =>
  board.selectedArea || {}
);

// Tiles Selectors
const getTilesState = createSelector(
  getBoardState,
  (board: StateBoard): Tiles =>
  board.tiles || {}
);

export const getTilesList = createSelector(
  getTilesState,
  (tiles: Tiles): string[] =>
  tiles.allIds || []
);
const getTilesById = createSelector(
  getTilesState,
  (tiles: Tiles): any =>
  tiles.byIds || {}
);

export const getTileById = (state: AppState, tileId: string): Tile & { selected: boolean } => {
  const tile = getTilesById(state)[tileId] || {};
  return {
    ...tile,
    selected: getTileIsSelected(state, tileId),
  }
}
  

export const getTileByCol = (state: AppState, col: number): Tile[] => {
  const byId = getTilesState(state).byIds || {};

  return Object.values(byId)
    .filter((tile: Tile) => tile.y === col);
};

export const getFlippedTiles = createSelector(
  getTilesById,
  (tiles: Tiles): string[] =>
    Object.values(tiles)
      .filter((tile: Tile) => !!tile.flipped)
      .map((tile: Tile) => tile.id)
);

export const getTileseOnSelectedArea = createSelector(
  [getTilesById, getSelectedArea],
  (tiles: Tiles, selectedArea: SelectedArea): string[] => {
    const { iniTile, endTile } = selectedArea;
    const tilesArr = Object.values(tiles);
  
    if (!iniTile || !endTile) {
      return [];
    };
    if (iniTile === endTile) {
      return [iniTile];
    };

    const onRange = (val: number, margin1: number, margin2: number) => !!(
      (val >= margin1 && val <= margin2) ||
      (val >= margin2 && val <= margin1)
    );

    const ini = tilesArr.find((tile: Tile) => tile.id === iniTile);
    const end = tilesArr.find((tile: Tile) => tile.id === endTile);

    return tilesArr
      .filter((tile: Tile) => (
        // Get tiles on the 'square' of the aera
        onRange(tile.x, ini.x, end.x) &&
        onRange(tile.y, ini.y, end.y)
      ))
      .map((tile: Tile) => tile.id);;
  }
);

// Detect if the tile is under selected area
export const getTileIsSelected = (state: AppState, tileId: string): boolean =>
  !!getTileseOnSelectedArea(state).includes(tileId);
