export interface Props {
  id: string,
  isFlipped?: boolean,
  isSelected?: boolean,
};

export interface State {
  onClick: Function,
  onDoubleClick: Function,
  onMouseEnter: Function,
  onLongPress: Function,
  onMouseUp: Function,
};
