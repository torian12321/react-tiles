import React from 'react';
import { connect } from 'react-redux';
import { boardSetSize } from '../../redux/actions/board.actions';
import BoardOptions from './BoardOptions';
import { Props, State } from './BoardOptions.interfaces';

const mapState = (): Props => ({

});

const mapDispatchToProps = (dispatch: Function): State => ({
  setSizeS: () => dispatch(boardSetSize(4)),
  setSizeM: () => dispatch(boardSetSize(6)),
  setSizeL: () => dispatch(boardSetSize(10)),
});

export default connect(
  mapState,
  mapDispatchToProps,
)(React.memo(BoardOptions));
