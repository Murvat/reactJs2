import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';


import { legacy_createStore } from 'redux';
import { Provider } from 'react-redux';
import initialState from './store/initialState';
import rootReducer from './reducers'

const store = legacy_createStore(rootReducer, initialState);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider >

  </React.StrictMode >
);
