import React from 'react';
import { connect } from 'react-redux';
import { getTileById } from '../../redux/selectors/board.selectors';
import { AppState } from '../../redux/reducers';
import { tileToggle } from '../../redux/actions/board.actions';
import { Props, State } from './Tile.interfaces';
import styles from './Tile.module.scss';

const Tile: React.FunctionComponent<Props & State> = ({ id, isActive, onClick }: Props & State) => {
  const handleClick = () => {
    onClick();
  }
  return (
    <button
      className={styles.tile}
      onClick={handleClick}
    >
      {id} {isActive}
    </button>
  );
};

const mapState = (state: AppState, ownProps: Props): Props => {
  const tile = getTileById(state, ownProps.id);

  return {
    id: tile.id,
    isActive: tile.active,
  };
};
const mapDispatchToProps = (dispatch: Function, ownProps: Props): State => ({
  onClick: () => dispatch(tileToggle(ownProps.id)),
});

export default connect(mapState, mapDispatchToProps)(Tile);