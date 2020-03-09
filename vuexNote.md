vuex
状态管理模式(state management pattern)+实现库（library implementation）

1. 计数器
  初级使用vuex
  建立vuex
    编辑vuex/store.js
    ```
    import Vue from 'vue'
    import Vuex from 'vuex'

    Vue.use(Vuex)

    consot state = {
      count: 0
    }
    const mutation = {
      add(){
        return state++
      },
      reduce(){
        return state--
      }
    }

    export defaut new Vuex.Store({
      state,
      mutation
    })
    ```
  编辑component/Count.vux
    ```
    <template>
      <div>{{$store.state.count}}</div>
      <button @click="$store.commit('add')">+</button>
      <button @click="$store.commit('reduce')">-</button>
    </template>
    <script>
      import store from '@/vuex/store.js'
      export default {
        store,
        mutation
      }
    </script>
    ```
  编辑router/index.js，加入新页面路由
    ```
    {
      path: '/counter',
      name: 'Counter',//(可选)
      component: Counter
    }
    ```
  编辑src/App.vue,根组件注入路由入口
    <router-link to='/counter'>计数器</router-link>






























