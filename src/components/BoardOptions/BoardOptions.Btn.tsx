import React from 'react';
import { IBtn } from './BoardOptions.interfaces';
import styles from './BoardOptions.module.scss';

const Button: React.FunctionComponent<IBtn> = ({
  label,
  disabled = false,
  onClick = () => {},
}: IBtn) => {
  const handleOnClick = () => {
    if(!disabled && onClick) {
      onClick();
    }
  }

  return (
    <button
      className={styles.btn}
      disabled={disabled}
      onClick={handleOnClick}
    >
      {label}
    </button>
  );
};

export default Button;
