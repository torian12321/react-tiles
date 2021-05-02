import React from 'react';
import classNames from 'classnames';
import { Props, State } from './Tile.interfaces';
import styles from './Tile.module.scss';
import useOnDoubleClick from "../../hooks/useOnDoubleClick";
import useLongPress from "../../hooks/useLongPress";


const Tile: React.FunctionComponent<Props & State> = ({
  id, isFlipped = false, isSelected = false,
  onClick = (e: Event) => {},
  onDoubleClick= (e: Event) => {},
  onMouseEnter = (e: Event) => {},
  onLongPress = (e: Event) => {},
  onMouseUp = (e: Event) => {},
}: Props & State) => {
  const [handleClick, handleDoubleClick] = useOnDoubleClick(onClick, onDoubleClick);
  const longPressEvent = useLongPress({ onLongPress, onClick: handleClick, onMouseUp });

  return (
    <div
      className={classNames(
        styles.wrapper,
        isFlipped && styles.flipped,
        isSelected && styles.selected,
      )}
    >
      <button
        aria-label={`tile-${id}`}
        {...longPressEvent}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={() => onMouseEnter()}
        // onMouseUp={() => onMouseUp()}
        
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
