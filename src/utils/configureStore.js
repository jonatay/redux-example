import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import todoApp from '../reducers';

const configureStore = () => {
  const middlewares = [thunk];
  if (process.env.NODE_ENV !== 'production') {
    middlewares.push(logger);
    // Note: you can supply options to `createLogger()`
  }

  return createStore(todoApp, applyMiddleware(...middlewares));
};

export default configureStore;
