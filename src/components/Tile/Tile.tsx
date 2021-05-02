import React from 'react';
import classNames from 'classnames';
import { Props, State } from './Tile.interfaces';
import styles from './Tile.module.scss';
import useOnDoubleClick from "../../hooks/useOnDoubleClick";


const Tile: React.FunctionComponent<Props & State> = ({
  id, isFlipped = false, isSelected = false,
  onClick, onDoubleClick, onMouseEnter,
}: Props & State) => {
  const [handleClick, handleDoubleClick] = useOnDoubleClick(onClick, onDoubleClick);

  const handlePress = () => {
    // console.log('abcccc');
    // onDoubleClick();
    onMouseEnter();
  };
  // console.log(id)
  return (
    <div
      className={classNames(
        styles.wrapper,
        isFlipped && styles.flipped,
        isSelected && styles.selected,
        // isFlipped && styles.tile_flipped,
      )}
    >
      <button
        aria-label={`tile-${id}`}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={handlePress}
        // onMouseDown={handlePress}
        className={classNames(
          styles.tile,
          // isSelected && styles.tile_selected,
          // isFlipped && styles.tile_flipped,
        )}
      >{id}
      </button>
    </div>
  );
};

export default Tile;
