import React, { Component } from 'react'
import { View, Text,
  TouchableOpacity, Button,
  ImageBackground, StyleSheet ,
   Dimensions, TextInput} from 'react-native'
import { connect } from 'react-redux'


class HotOffer extends Component {
  static navigationOptions = {
    draverLabel: 'hot offer'
  }

  constructor(props) {
    super(props)
  }
  render () {
    return (
      <View>
        <Text>Hot offer</Text>
      </View>
    )
  }
}

export default connect(null, null)(HotOffer)
