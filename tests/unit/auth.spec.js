import { createLocalVue, mount } from '@vue/test-utils';
import ElementUI from 'element-ui';
import VueRouter from 'vue-router';
import AuthBase from '@/components/Auth/auth_base.vue';
import Login from '@/components/Auth/login.vue';
import Register from '@/components/Auth/register.vue';

describe('Authentication', () => {
	let wrapper;
	const $route = {
		path: '/auth/register',
	};
	beforeEach(() => {
		const localVue = createLocalVue();
		localVue.use(ElementUI);
		localVue.use(VueRouter);
		const router = new VueRouter({
			path: 'login',
			name: 'login',
			component: Login,
		},
			// {
			//   path: 'register',
			//   name: 'register',
			//   component: Register,
			// },
		);

		wrapper = mount(AuthBase, {
			router,
			localVue,
		});
	});
	it('renders login form', () => {
		console.log(wrapper.find('#auth-link').text());
		expect(wrapper.find('#auth-link').text()).toContain('login');
	});

	it('renders register form', () => {
		wrapper.find('#auth-link').trigger('click');
		expect(wrapper.find('#auth-link').text()).toContain('register');
	});
});
