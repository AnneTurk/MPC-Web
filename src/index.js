import 'babel-polyfill'
import React from 'react';
import App from './components/App.jsx';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import '../src/actions/requestProducts';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import configureStore from './configureStore.js';

const store = configureStore();
store.subscribe(() => {
  console.log(store.getState())
});

render(
  <Provider store={store} >
    <App />
  </Provider>
    ,document.getElementById("root")
  );
