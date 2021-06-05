import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, compose, applyMiddleware } from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import reducer from './reducers/index'

// import { createHistory } from 'history'
// import { useRouterHistory } from 'react-router'
// import { syncHistoryWithStore } from 'react-router-redux' 


// const browserHistory = useRouterHistory(createHistory)({
//   basename: 'http://localhost:3000/'
// })s
// const history = syncHistoryWithStore(browserHistory, store)

const store = createStore(reducer,compose(applyMiddleware(thunk), composeWithDevTools()))


ReactDOM.render(
  <Provider store={store}>
    <Router > 
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);

