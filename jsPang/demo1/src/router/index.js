import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/hi/:id(\\d+)/:slogan',
      component: Hi
    }, {
      path: '/goHome',
      redirect: '/'
    }, {
      path: '/goHi/:id(\\d+)/:slogan',
      redirect: '/hi/:id(\\d+)/:slogan'
    }, {
      path: '/hi1',
      component: Hi1,
      alias: '/alias'
    }
  ]
})
