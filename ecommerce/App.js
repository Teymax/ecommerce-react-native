/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { reduxifyNavigator } from 'react-navigation-redux-helpers'
import store from './src/store'
import { Provider, connect } from 'react-redux'
import AppNavigator from './src/navigation'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const App = reduxifyNavigator(AppNavigator, 'root')
const mapStateToProps = state => ({
  state: state.nav
})
const AppWithNavigationState = connect(mapStateToProps)(App)

class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppWithNavigationState />
      </Provider>
    )
  }
}

export default Root
