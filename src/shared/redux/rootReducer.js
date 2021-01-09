import { combineReducers } from 'redux';
import { reducer as modal } from 'react-redux-modal-flex';
import { asideReducer } from './aside/asideReducer';

export default combineReducers({
  asideReducer,
  modal: modal( {
    classContent: 'modal-content',
    animation: 'zoomIn',
    duration: 200,
    mask: true,
    /* initial state, see API reference */
  } ),
})