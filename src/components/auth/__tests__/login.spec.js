import { shallowMount, RouterLinkStub } from '@vue/test-utils'
import login from '../login.vue'

const wrapper = shallowMount(login, {
  stubs: {
    RouterLink: RouterLinkStub
  }
})

describe('Login Component', () => {
  test('Renders login form', () => {
    expect(wrapper.text()).toContain('login')
  })

  test('router-link redirects to register page', () => {
    expect(wrapper.find(RouterLinkStub).props().to).toBe('/auth/register')
    expect(wrapper.find(RouterLinkStub).text()).toBe('Register')
  })
})
