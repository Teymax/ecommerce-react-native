import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Button, ImageBackground, StyleSheet , Dimensions, TextInput} from 'react-native'
import { connect } from 'react-redux'

class Test extends Component {
  constructor(props) {
    super(props)
  }
  render () {
    return (
      <View>
        <Text>Hellodddddd</Text>
      </View>
    )
  }
}

export default connect(null, null)(Test)
