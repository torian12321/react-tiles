import React from 'react';
import classNames from 'classnames';
import { Props, State } from './BtnReset.interfaces';
import logo from './undo.svg';
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
      <img
        src={logo}
        alt="reset"
        className={styles.logo}
      />
    </button>
  );
};

export default BtnReset;
