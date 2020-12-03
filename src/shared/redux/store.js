import { applyMiddleware, createStore } from 'redux';
//import logger from 'redux-logger';
const { asideReducer } = require("./aside/asideReducer");

let middleware = [];

if (process.env.NODE_ENV !== 'production') {
    const logger = require('redux-logger');
    console.log(logger)
    middleware = [logger.default];
} else {
  middleware = [];
}
console.log(...middleware)
export default createStore(asideReducer, applyMiddleware (...middleware)) 