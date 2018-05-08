import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'

// import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import registerServiceWorker from './utilities/registerServiceWorker';

import Root from './containers/Root'
import { rootReducer } from './containers/rootReducer'

const store = createStore(
  rootReducer
  // applyMiddleware(...middleware)
)

ReactDOM.render(
  <Router>
    <Root store={store}/>
  </Router>,
  document.getElementById('root')
);

registerServiceWorker();
