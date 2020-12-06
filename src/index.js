import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import App from './App';
import './index.css';
import { rootReducer } from './redux/reducers';
import { apiMiddleware } from './middleware/axiosDefaultConfig';

const store =  createStore(rootReducer,applyMiddleware(thunk,apiMiddleware))

ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById('root')
);
