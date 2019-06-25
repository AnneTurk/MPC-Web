import 'babel-polyfill'
import React from 'react';
import App from './components/App.jsx';
import * as serviceWorker from './serviceWorker';
import {render} from 'react-dom';
import { createStore } from "redux";
import rootReducer from './reducers';
import Root from './components/Root';
import '../src/actions/requestProducts';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';

const store = createStore(rootReducer, window.STATE_FROM_SERVER)

console.log(store.getState())

render(
  <App store={store} />
    ,document.getElementById("root")
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
