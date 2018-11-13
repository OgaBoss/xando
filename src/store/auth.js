/* eslint-disable no-tabs,indent,no-trailing-spaces */
/**
 * Created by adebayooluwadamilola on 10/20/18.
 */
import { register } from '../services/auth';
const auth = {
  state: {
    currentUser: {}
  },

	getters: {
		getCurrentUser: (state) => {
			return state.currentUser
		}
	},

  mutations: {
    setCurrentUser: (state, payload) => {
      state.currentUser = payload
    }
  },

  actions: {
		actionRegisterUser: ({ commit }, payload) => {
      register(payload).then((user) => {
        commit('setCurrentUser', user)
      }, (err) => {
        console.log(err)
      })
		}
  }
}

export default auth
