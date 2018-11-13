/* eslint-disable no-mixed-spaces-and-tabs,no-mixed-spaces-and-tabs,no-trailing-spaces,no-tabs */
import Auth from '../auth'
import { register } from '../../services/auth'
import flushPromises from 'flush-promises'

jest.mock('../../services/auth.js')

describe('auth store', () => {
  test('mutations.setCurrentUser sets state.currentUser', () => {
    const currentUser = {
      email: 'test@test.com',
      username: 'ogaboss'
    }

    const state = {
      currentUser: {}
    }

    Auth.mutations.setCurrentUser(state, currentUser)
    expect(state.currentUser).toBe(currentUser)
  })

  test('getters.getCurrentUser returns state.currentUser to user', () => {
    const state = {
    	currentUser: {
        email: 'test@test.com',
        username: 'ogaboss'
      }
    }

    const user = Auth.getters.getCurrentUser(state)
    expect(user.email).toBe(state.currentUser.email)
  })

  test('actions.actionRegisterUser registers a new user', async () => {
    expect.assertions(1)
    const userObject = {
      email: 'test@test.com',
      username: 'ogaboss'
    }

    const data = {
      email: 'test@test.com',
      password: 'secret'
    }

    register.mockImplementation((userData) => {
		  return Promise.resolve(userObject)
    })

    const context = {
    	commit: jest.fn()
    }

    Auth.actions.actionRegisterUser(context, { data })
    await flushPromises()
    expect(context.commit).toHaveBeenCalledWith('setCurrentUser', userObject)
  })
})
