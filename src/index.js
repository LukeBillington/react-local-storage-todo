import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import './index.css';
import todoApp from './reducers';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(todoApp, applyMiddleware(thunk));

ReactDOM.render(<App store={store} />, document.getElementById('root'));
registerServiceWorker();
