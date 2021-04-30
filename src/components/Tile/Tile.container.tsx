import React from 'react';
import { connect } from 'react-redux';
import { getTileById } from '../../redux/selectors/board.selectors';
import { AppState } from '../../redux/reducers';
import { tileToggle, columnToggle } from '../../redux/actions/board.actions';
import Tile from './Tile';
import { Props, State } from './Tile.interfaces';

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

export default connect(
  mapState,
  mapDispatchToProps
)(React.memo(Tile));
