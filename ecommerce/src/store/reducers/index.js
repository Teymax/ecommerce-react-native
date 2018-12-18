import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import AppNavigator from '../../navigation'
import commerce from './ecomerce'

const navReducer = createNavigationReducer(AppNavigator)

const ecommerce = combineReducers({
  nav: navReducer,
  app: commerce
})

export default ecommerce
