import { createStore } from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import todoApp from './reducers/';
import App from './App';
import { loadState, saveState } from './localStorage';
//now with persistant state
const persistedState = loadState();

const store = createStore(todoApp, persistedState);

store.subscribe(() => {
  saveState(store.getState().todos);
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
