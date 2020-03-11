import Vue from 'vue'
import App from './App.vue'
import About from './components/About.vue'
import HelloWorld from './components/HelloWorld.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/about', component: About}
]
const router = new VueRouter({
  routes
})

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
