import React from 'react';
import classNames from 'classnames';
import { Props, State } from './BtnReset.interfaces';
import styles from './BtnReset.module.scss';

const BtnReset: React.FunctionComponent<Props & State> = ({
  className,
  disabled = false,
  onClick = () => {},
}: Props  & State) => {
  const handleClick = () => {
    if(!disabled) {
      onClick();
    }
  }

  return (
    <button
      aria-label='reset'
      disabled={disabled}
      onClick={handleClick}
      className={classNames(
        styles.btn,
        disabled && styles.disabled,
        className,
      )}
    >
      Reset
    </button>
  );
};

export default BtnReset;
