import { applyMiddleware, createStore } from 'redux';
//import logger from 'redux-logger';
import combineReducers from './rootReducer'
let middleware = [];

//configuracion para desarrollo
if (process.env.NODE_ENV !== 'production') {
  const logger = require('redux-logger');
  middleware = [logger.default];
} else {
  //configuracion para producción
  middleware = [];
}
export default createStore( combineReducers, applyMiddleware( ...middleware ) )
