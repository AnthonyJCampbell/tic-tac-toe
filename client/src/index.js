import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducer);

function reducer() {
  return {
    title: 'Hello world! I\'m in the Redux store!',
  }
}


ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>
, document.getElementById('root'));
