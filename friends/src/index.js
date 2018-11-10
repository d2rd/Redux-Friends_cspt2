import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import * as serviceWorker from './serviceWorker';

// import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';
import FriendsReducer from './reducers/friendsReducer'

const middleware = applyMiddleware(thunk)
// const store = createStore(rootReducer, applyMiddleware(thunk, logger));
const store = createStore(FriendsReducer, middleware);


ReactDOM.render(
  <Provider store={store}>
    {/* <Router> */}
      <App />
    {/* </Router> */}
  </Provider>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
