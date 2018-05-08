import React from 'react';
import PropTypes from 'prop-types'
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import App from './App';

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <div>
        <Route path="/" component={App} />
      </div>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
}

export default Root
