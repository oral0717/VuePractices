import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { navShow: true}
  },
  {
    path: '/about',
    name: 'About',
    meta: { navShow: false},
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/heart',
    name: 'Heart',
    meta: { navShow: false},
    component: () => import(/* webpackChunkName: "heart" */ '../views/Heart/index.vue')
  },
  {
    path: '/demo',
    name: 'Demo',
    meta: { navShow: false},
    component: () => import(/* webpackChunkName: "demo" */ '../views/Demo/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
