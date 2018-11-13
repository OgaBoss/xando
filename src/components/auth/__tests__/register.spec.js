/**
 * Created by adebayooluwadamilola on 10/22/18.
 */
import { shallowMount, RouterLinkStub, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import register from '../register.vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const data = {
  email: 'test@test.com',
  password: 'secret'
}

describe('Register Component', () => {
  let storeConfig
  let store
  let wrapper
  beforeEach(() => {
    storeConfig = {
      actions: {
        actionRegisterUser: jest.fn(() => Promise.resolve())
      }
    }

    store = new Vuex.Store(storeConfig)

    wrapper = shallowMount(register, {
      stubs: {
        RouterLink: RouterLinkStub
      },
      localVue,
      store
    })
  })
  test('Renders register form', () => {
    expect(wrapper.text()).toContain('Register')
  })

  test('router-link redirects to login page', () => {
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/auth/login')
    expect(wrapper.find(RouterLinkStub).text()).toBe('Login')
  })

  test('dispatches actionRegisterUser', async () => {
    expect.assertions(1)

    const email = wrapper.find('input[type="email"]')
    email.setValue('test@test.com')

    const password = wrapper.find('input[type="password"]')
    password.setValue('secret')

    store.dispatch = jest.fn(() => Promise.resolve())
    wrapper.find('button').trigger('submit')
    expect(store.dispatch).toHaveBeenCalledWith('actionRegisterUser', data)
  })
})
