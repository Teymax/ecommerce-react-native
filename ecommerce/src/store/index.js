import { createStore, applyMiddleware } from 'redux'
import { createReactNavigationReduxMiddleware } from 'react-navigation-redux-helpers'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import ecommerce from './reducers'

const middleware = createReactNavigationReduxMiddleware('root', state => state.nav)

const store = createStore(ecommerce, applyMiddleware(middleware, createLogger(), thunk))

export default store
