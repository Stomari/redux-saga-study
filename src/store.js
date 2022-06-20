import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import rootReducer from './reducer/rootReducer'
import mySaga from './saga/saga'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware()
// mount it on the Store
export const store = createStore(
  rootReducer,
  applyMiddleware(sagaMiddleware)
)

// then run the saga
sagaMiddleware.run(mySaga)