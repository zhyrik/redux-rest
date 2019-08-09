import { createStore, applyMiddleware, compose } from 'redux'
import reduxThunk from 'redux-thunk'
import promise from 'redux-promise-middleware'
import logger from 'redux-logger'

import rootReducer from './reducers'

// redux devtools
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(promise, reduxThunk, logger ),
  // other store enhancers if any
);


export const store = createStore(
  rootReducer,
  enhancer
)