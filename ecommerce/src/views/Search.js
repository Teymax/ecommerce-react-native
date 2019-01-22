import React, { Component } from 'react'
import { View, Text,
  TouchableOpacity, Button,
  ImageBackground, StyleSheet ,
   Dimensions, TextInput} from 'react-native'
import { connect } from 'react-redux'


class Search extends Component {
  static navigationOptions = {
    draverLabel: 'Search'
  }

  constructor(props) {
    super(props)
  }
  render () {
    return (
      <View>
        <Text>Search</Text>
      </View>
    )
  }
}

export default connect(null, null)(Search)
