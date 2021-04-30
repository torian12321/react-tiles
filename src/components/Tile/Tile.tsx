import React from 'react';
import classNames from 'classnames';
import { Props, State } from './Tile.interfaces';
import styles from './Tile.module.scss';
import useOnDoubleClick from "../../hooks/useOnDoubleClick";


const Tile: React.FunctionComponent<Props & State> = ({
  id, isFlipped, onClick, onDoubleClick,
}: Props & State) => {
  const [handleClick, handleDoubleClick] = useOnDoubleClick(onClick, onDoubleClick);

  const handlePress = () => {
    // console.log('abcccc');
    // onDoubleClick();
  };
  console.log(id)
  return (
    <div className={styles.wrapper}>
      <button
        aria-label={`tile-${id}`}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        // onMouseDown={handlePress}
        className={classNames(
          styles.tile,
          isFlipped && styles.tile_flipped,
        )}
      >{id}
      </button>
    </div>
  );
};

export default Tile;
