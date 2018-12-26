import { CHECK_AUTH } from './auth-types'
import firebase from 'react-native-firebase'

export function checkAuth () {
  let currentUser = firebase.auth().currentUser
  return currentUser
}
