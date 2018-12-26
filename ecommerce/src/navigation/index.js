import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { createSwitchNavigator} from 'react-navigation'
import Home from '../views/Home'
import Test from '../views/Test'
import AuthNavigator from './auth-navigator'
import AppNavigator from './app-navigator'

const MainNavigator = createSwitchNavigator(
  {
    Auth: AuthNavigator,
    App: AppNavigator
  },
  {
    initialRouteName: 'Auth'
  }
)

export default MainNavigator
