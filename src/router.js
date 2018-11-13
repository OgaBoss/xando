const routes = [
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

export default routes
