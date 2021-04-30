import React from 'react';
import { connect } from 'react-redux';
import { boardReset } from '../../redux/actions/board.actions';
import { getFlippedTiles } from '../../redux/selectors/board.selectors';
import BtnReset from './BtnReset';
import { AppState } from '../../redux/reducers';
import { Props, State } from './BtnReset.interfaces';

const mapState = (state: AppState): Props => ({
  disabled: !getFlippedTiles(state).length,
});

const mapDispatchToProps = (dispatch: Function): State => ({
  onClick: () => dispatch(boardReset()),
});

export default connect(
  mapState,
  mapDispatchToProps
)(React.memo(BtnReset));
