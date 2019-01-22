import React from 'react'
import { createBottomTabNavigator } from 'react-navigation'
import Home from '../views/Home'
import HotOffer from '../views/HotOffer'
import Profile from '../views/Profile'
import Cart from '../views/Cart'
import Search from '../views/Search'

const AppRouteConfig = {
  Home: {
    screen: Home
  },
  HotOffer: {
    screen: HotOffer
  },
  Cart: {
    screen: Cart
  },
  Search: {
    screen: Search
  },
  Profile: {
    screen: Profile
  },

}

const BottomTabNavigatorConfig = {
  tabBarOptions: {
    labelStyle: {
      fontSize: 16,
    },
    style: {
      backgroundColor: '#333333',
      textColor: '#adadad',
      fontSize: '16px',
    },
  }

}

const AppNavigator = createBottomTabNavigator(AppRouteConfig, BottomTabNavigatorConfig)

export default AppNavigator
