import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

const RectBlueButton = props => {
  return (
    <TouchableOpacity style={style.container}>
      <Text style={style.text}>{props.title.toUpperCase()}</Text>
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 0,
    padding: 15,
    backgroundColor: '#00acec',
  },
  text: {
    textAlign: 'center',
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  }
})

export default RectBlueButton
