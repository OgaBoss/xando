import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyB6y3xpeZktgeQkUfUPvdH0taPLworJ4lM',
  authDomain: 'xando-d147b.firebaseapp.com',
  databaseURL: 'https://xando-d147b.firebaseio.com',
  projectId: 'xando-d147b',
  storageBucket: 'xando-d147b.appspot.com',
  messagingSenderId: '198197416743'
}
firebase.initializeApp(config)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
