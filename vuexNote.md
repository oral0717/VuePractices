vuex
状态管理模式(state management pattern)+实现库（library implementation）

1. 计数器
  初级使用vuex
  1. 建立vuex文件夹
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
  2. 编辑component/Count.vux
      ```
      <template>
        <div>{{$store.state.count}}</div>
        <button @click="$store.commit('add')">+</button>
        <button @click="$store.commit('reduce')">-</button>
      </template>
      <script>
        import store from '@/vuex/store.js'
        export default {
          store
        }
      </script>
      ```
  3. 编辑router/index.js，加入新页面路由
      ```
      {
        path: '/counter',
        name: 'Counter',//(可选)
        component: Counter
      }
      ```
  4. 编辑src/App.vue,根组件注入路由入口
    <router-link to='/counter'>计数器</router-link>

2. state访问状态对象
  <template>
    <div>{{$store.state.count}}</div>
    <button @click="$store.commit('add')">+</button>
    <button @click="$store.commit('reduce')">-</button>
  </template>
  优化以上访问state方式：3种方式
    <div>{{count}}</div>
    <button @click="$store.commit('add', 10)">+</button>
    <button @click="add(5)">+</button>
    <button @click="reduce">-</button>
    1.<script>
        import store from '@/vuex/store.js'
        export default {
          computed: {
            count(){
              return this.$store.state.count
            }
          },
          store
        }
      </script>
    2.<script>
        import store from '@/vuex/store.js'
        import {mapState} from 'vuex'
        export default {
          computed: mapState({
            count: state => state.count
          }),
          store
        }
      </script>
    3.<script>
        import store from '@/vuex/store.js'
        import {mapState,mapMutations} from 'vuex'
        export default {
          computed: mapState(['count']),
          methods: mapMutations(['add','reduce']),
          store
        }
      </script>
3.

























