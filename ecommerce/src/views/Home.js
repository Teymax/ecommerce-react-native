import React, { Component } from 'react'
import { View, Text,
  TouchableOpacity, Button,
  ImageBackground, StyleSheet ,
   Dimensions, TextInput} from 'react-native'
import { connect } from 'react-redux'


class Home extends Component {
  static navigationOptions = {
    draverLabel: 'home'
  }

  constructor(props) {
    super(props)
  }
  render () {
    return (
      <View>
        <Text>Navigation</Text>
      </View>
    )
  }
}

export default connect(null, null)(Home)
