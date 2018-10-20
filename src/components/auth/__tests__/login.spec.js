import { shallowMount } from '@vue/test-utils'
import login from '../login.vue'

describe('Login Component', () => {
  test('Renders login form', () => {
    const wrapper = shallowMount(login)
    expect(wrapper.text()).toContain('login')
  })
})
