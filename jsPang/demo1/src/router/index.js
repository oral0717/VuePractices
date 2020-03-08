import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Error404 from '@/components/Error404'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/hi/:id(\\d+)/:slogan',
      component: Hi,
      name: 'hi'
    }, {
      path: '/goHome',
      redirect: '/'
    }, {
      path: '/goHi/:id(\\d+)/:slogan?a=:a',
      redirect: '/hi/:id(\\d+)/:slogan'
    }, {
      path: '/hi1',
      component: Hi1,
      alias: '/alias'
    }, {
      path: '*',
      component: Error404
    }
  ]
})
