import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import logger from 'redux-logger';
import todoApp from '../reducers';

const configureStore = () => {
  const middlewares = [promise];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
    // Note: you can supply options to `createLogger()`
  }

  return createStore(todoApp, applyMiddleware(...middlewares));
};

export default configureStore;
