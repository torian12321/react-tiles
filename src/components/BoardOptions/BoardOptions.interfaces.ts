export interface Props {
  className?: string,
};
export interface State {
  setSizeS: Function,
  setSizeM: Function,
  setSizeL: Function,
};

export interface IBtn {
  label: string,
  onClick: Function,
  disabled?: boolean,
};
