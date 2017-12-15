import React from 'react';
import ReactDOM from 'react-dom';

import Root from './components/Root';

import configureStore from './utils/configureStore';
const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
