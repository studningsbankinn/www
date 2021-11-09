import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      name: 'Welcome',
      path: '/',
      alias: '/velkomin',
      component: () => import('./pages/Welcome.vue')
    },
    {
      name: 'About',
      path: '/um',
      component: () => import('./pages/About.vue')
    },
    {
      name: 'Information',
      path: '/upplysingar',
      component: () => import('./pages/Information.vue')
    },
    {
      name: 'School',
      path: '/skoli/:id',
      component: () => import('./pages/School.vue')
    },
  ]
})
