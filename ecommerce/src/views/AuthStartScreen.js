import React, { Component } from 'react'
import { connect } from 'react-redux'
import { checkAuth } from '../store/reducers/auth/actions'
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native'
import RectBlueButton from '../components/common/rect-button'

const {width, height} = Dimensions.get('window')

class AuthStartScreen extends Component {
  constructor (props) {
    super(props)
    this._bootstrapAsync()
  }
  _bootstrapAsync = async () => {
    const user = await this.props.check()
    // user = true
    if (user) this.props.navigation.navigate('App')
  }
  render () {
    return (
      <View style={style.container}>
        <Image style={style.image} resizeMethod="scale" source={require('../components/AuthStartScreen/image/start.jpg')}/>
        <View style={style.welcome}>
          <Text style={style.title}>Welcome to <Text style={{fontWeight: 'bold'}}>Shop Cart</Text></Text>
        </View>
        <RectBlueButton title="Get Starteds" />
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    height: height - 20
  },
  image: {
    flex: 1,
    flexBasis: '30%',
  },
  title: {
    fontSize: 24,
    textAlign: 'center'
  },
  welcome: {
    paddingTop: 45,
    paddingBottom: 45,
  }
})

const mapDispatchToProps = dispatch => ({
  check: () => dispatch(checkAuth)
})

export default connect(null, mapDispatchToProps)(AuthStartScreen)
