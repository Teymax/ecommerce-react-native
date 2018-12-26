import { combineReducers } from 'redux'
import { createNavigationReducer } from 'react-navigation-redux-helpers'
import AppNavigator from '../../navigation'
import commerce from './ecomerce'
import auth from './auth'

const navReducer = createNavigationReducer(AppNavigator)

const ecommerce = combineReducers({
  nav: navReducer,
  app: commerce,
  auth: auth
})

export default ecommerce
