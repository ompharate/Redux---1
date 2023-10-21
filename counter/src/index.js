import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createStore, combineReducers } from 'redux';
import { accountReducer } from './reducers/account';

import { Provider } from 'react-redux';

const store = createStore(
  combineReducers({
    account: accountReducer,
  }),
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
