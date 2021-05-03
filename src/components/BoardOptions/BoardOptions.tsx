import React from 'react';
import classNames from 'classnames';
import Button from './BoardOptions.Btn';
import { Props, State } from './BoardOptions.interfaces';
import styles from './BoardOptions.module.scss';

const BoardOptions: React.FunctionComponent<Props & State> = ({
  className,
  setSizeS = () => {},
  setSizeM = () => {},
  setSizeL = () => {},
}: Props & State) => (
  <div className={classNames(styles.wrapper, className)}>
    <Button onClick={setSizeS} label='S' />
    <Button onClick={setSizeM} label='M' />
    <Button onClick={setSizeL} label='L' />
  </div>
);

export default BoardOptions;
