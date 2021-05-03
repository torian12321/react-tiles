export interface Props {
  className?: string,
  tiles: any[],
  columns: number,
};
export interface State {
  onMouseLeave?: Function,
};

export interface IBoardRow {
  tiles: any[],
};
