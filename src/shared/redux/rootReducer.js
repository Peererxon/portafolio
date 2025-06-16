import { combineReducers } from 'redux';
import { asideReducer } from './aside/asideReducer';
import modalReducer from './modal/modalSlice';

export default combineReducers({
  asideReducer,
  modal: modalReducer,
})