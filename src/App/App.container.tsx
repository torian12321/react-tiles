import React from 'react';
import { connect } from 'react-redux';
import { getFlippedTiles } from '../redux/selectors/board.selectors';
import { AppState } from '../redux/reducers';
import App from './App';
import { Props } from './App.interfaces';

const mapState = (state: AppState): Props => ({
  tiles: getFlippedTiles(state),
});

export default connect(
  mapState,
  {},
)(React.memo(App));
