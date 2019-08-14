import Vue from 'vue'
import Router from 'vue-router'

import Login from './components/login/login.vue'
import Home from './components/home/home.vue'
import Users from './components/users/Users.vue'
import Roles from './components/roles/Roles.vue'
import Rights from './components/rights/Rights.vue'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      children: [
        { path: '/users', component: Users },
        { path: '/roles', component: Roles },
        { path: '/rights', component: Rights }
      ] }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.path === '/login') {
    next()
  } else {
    localStorage.getItem('token') ? next() : next('/login')
  }
})

export default router
