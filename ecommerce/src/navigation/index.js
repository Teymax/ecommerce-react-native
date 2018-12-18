import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import { createDrawerNavigator, DrawerItems, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation'
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

const DrawerComponent = props => (
  <SafeAreaView style={{flex: 1}}>
    <View style={{height: 80, alignItems: 'center', justifyContent: 'center'}}>
      
    </View>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>
)

const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: Home
  },
  Test: {
    screen: Test
  },
})

export default AppNavigator
