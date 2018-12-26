import React from 'react'
import { createDrawerNavigator } from 'react-navigation'
import Home from '../views/Home'
import Test from '../views/Test'

const AppRouteConfigs = {
  Home: {
    screen: Home
  },
  Test: {
    screen: Test
  },
}

const AppNavigator = createDrawerNavigator(AppRouteConfigs)

export default AppNavigator
