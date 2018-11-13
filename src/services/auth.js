/* eslint-disable no-tabs */
/**
 * Created by adebayooluwadamilola on 10/21/18.
 */
import firebase from 'firebase'

export function register (data) {
  return firebase.auth().createUserWithEmailAndPassword(data.email, data.password)
}
