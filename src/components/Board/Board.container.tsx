import React from 'react';
import { connect } from 'react-redux';
import { getTilesList, getOptions } from '../../redux/selectors/board.selectors';
import { AppState } from '../../redux/reducers';
import Board from './Board';
import { IBoard } from './Board.interfaces';

const mapState = (state: AppState): IBoard => ({
  tiles: getTilesList(state),
  columns: getOptions(state).columns,
});

export default connect(
  mapState,
  {}
)(React.memo(Board));
