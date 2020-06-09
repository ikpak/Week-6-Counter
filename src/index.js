import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux'
import { createStore} from 'redux'

const initialState = {
  count: 0
}

function reducer(state=initialState, action) {
  if(action.type === 'increment') {
    state.count++
  } else if(action.type === 'decrement' && state.count > 0) {
    state.count = state.count - action.payload
  } else if(action.type === 'reset') {
    state.count = 0
  }

  return {...state}
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
