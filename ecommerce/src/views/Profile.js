import React, { Component } from 'react'
import { View, Text,
  TouchableOpacity, Button,
  ImageBackground, StyleSheet ,
   Dimensions, TextInput} from 'react-native'
import { connect } from 'react-redux'


class Profile extends Component {
  static tabBarOptions = {
    tabLabel: 'Profile 123'
  }

  constructor(props) {
    super(props)
  }
  render () {
    return (
      <View>
        <Text>Profile</Text>
      </View>
    )
  }
}

export default connect(null, null)(Profile)
