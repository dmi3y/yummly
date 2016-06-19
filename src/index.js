/**
 * @module index
 * @description Bootstraps app
 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'

import appReducers from './reducers'
import RouterProxyCont from './containers/RouterProxyCont'

let store = createStore(
  appReducers,
  applyMiddleware(thunkMiddleware)
)

render(
  <Provider store={store}>
    <RouterProxyCont />
  </Provider>,
  document.getElementById('app')
)
