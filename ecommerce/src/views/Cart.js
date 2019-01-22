import React, { Component } from 'react'
import { View, Text,
  TouchableOpacity, Button,
  ImageBackground, StyleSheet ,
   Dimensions, TextInput} from 'react-native'
import { connect } from 'react-redux'


class Cart extends Component {
  static navigationOptions = {
    draverLabel: 'My cart'
  }

  constructor(props) {
    super(props)
  }
  render () {
    return (
      <View>
        <Text>Cart</Text>
      </View>
    )
  }
}

export default connect(null, null)(Cart)
