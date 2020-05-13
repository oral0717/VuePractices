import Vue from 'vue'
import VueRouter from 'vue-router'
import { homeRoutes } from './home'
import { cartRoutes } from './cart'

Vue.use(VueRouter)

const routes = [
  ...homeRoutes,
  ...cartRoutes
]
// console.log(routes)

let router = new VueRouter({
  mode: 'history',
  routes
})

export default router

