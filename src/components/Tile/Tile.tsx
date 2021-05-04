import React from 'react';
import classNames from 'classnames';
import { Props, State } from './Tile.interfaces';
import styles from './Tile.module.scss';
import useOnDoubleClick from "../../hooks/useOnDoubleClick";
import useLongPress from "../../hooks/useLongPress";


const Tile: React.FunctionComponent<Props & State> = ({
  id, isFlipped = false, isSelected = false,
  onClick = (e: Event) => {},
  onDoubleClick = (e: Event) => {},
  onMouseEnter = (e: Event) => {},
  onLongPress = (e: Event) => {},
  onMouseUp = (e: Event) => {},
}: Props & State) => {
  // eslint-disable-next-line
  const [handleClick, handleDoubleClick] = useOnDoubleClick(onClick, onDoubleClick);
  const longPressEvent = useLongPress({ onLongPress });

  return (
    <button
      onMouseEnter={() => onMouseEnter()}
      onMouseUp={()=> onMouseUp()}
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
      className={classNames(
        styles.wrapper,
        isFlipped && styles.flipped,
        isSelected && styles.selected,
      )}
    >
      <div
        aria-label={`tile-${id}`}
        className={styles.panel}
        {...longPressEvent}
      >
        <div className={styles.front}>
          <div className={styles.box1} />
        </div>
        <div className={styles.back}>
          <div className={styles.box2} />
        </div>
      </div>
    </button>
  );
};

export default Tile;
