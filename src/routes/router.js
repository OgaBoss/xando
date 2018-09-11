import Vue from 'vue';
import Router from 'vue-router';
import Login from '../components/Auth/login.vue';
import Register from '../components/Auth/register.vue';
import AuthBase from '../components/Auth/auth_base.vue';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/auth',
			name: 'auth',
			component: AuthBase,
			children: [
				{
					path: 'login',
					name: 'login',
					component: Login,
				},
				{
					path: 'register',
					name: 'register',
					component: Register,
				},
			],
		},
	],
});
