import React from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import { getTileById } from '../../redux/selectors/board.selectors';
import { AppState } from '../../redux/reducers';
import { tileToggle, columnToggle } from '../../redux/actions/board.actions';
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

const mapState = (state: AppState, ownProps: Props): Props => {
  const tile = getTileById(state, ownProps.id);

  return {
    id: tile.id,
    isFlipped: tile.flipped,
  };
};
const mapDispatchToProps = (dispatch: Function, ownProps: Props): State => ({
  onClick: () => dispatch(tileToggle(ownProps.id)),
  onDoubleClick: () => dispatch(columnToggle(ownProps.id)),
});

export default connect(mapState, mapDispatchToProps)(Tile);