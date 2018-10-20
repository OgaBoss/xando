import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/auth',
      component: () => import('./views/auth.vue'),
      children: [
        {
          path: 'login',
          name: 'login',
          component: () => import('./components/auth/login.vue')
        },
        {
          path: 'register',
          name: 'register',
          component: () => import('./components/auth/register.vue')
        }
      ]
    }
  ]
})
