import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import AuthStartScreen from '../views/AuthStartScreen'

const AuthRouteConfig = {
  Start: {
    screen: AuthStartScreen
  }
}

const AuthNavigator = createDrawerNavigator(AuthRouteConfig)

export default AuthNavigator
