import React, { Component } from 'react'
import {View, Text, Image, ScrollView, StyleSheet, Button, Picker, Modal} from 'react-native'
import {connect} from "react-redux";

class ProductCard extends Component {
  render() {
    return (
      <View>
        <Text>This is an Product Card Page!</Text>
      </View>
    );
  }
}

export default connect(null, null)(ProductCard)