import { createStore, applyMiddleware, compose } from 'redux';
import reducers from './reducer';
import createSagaMiddleware from 'redux-saga'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'

import rootSaga from './rootSaga'

let composeEnhancers = compose;

if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
/* eslint-disable no-underscore-dangle */
if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
}
export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()

// Create the store with two middlewares
// 1. sagaMiddleware: Makes redux-sagas work
// 2. routerMiddleware: Syncs the location/URL path to the state
const middlewares = [sagaMiddleware, routerMiddleware(history)];

const enhancers = [applyMiddleware(...middlewares)];

const store = createStore(
    reducers(history),
    composeEnhancers(...enhancers),
)
sagaMiddleware.run(rootSaga)

export default store;