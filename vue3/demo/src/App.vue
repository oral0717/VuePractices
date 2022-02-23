<template>
  <div>xx{{count}}</div>
  <div>xx{{count2}}</div>
  <div>cc{{cc.a}} {{cc.b}} {{cc.c.join(',')}}</div>
  <!-- <div @click="updateCount">更新数据</div> -->
  <HellO msg="xxx" msg2="yyy" @updateCount="updateCount"/>

  <h2>计算属性和监视</h2>
  <fieldset>
    <legend>姓名操作</legend>
    姓氏： <input type="text" placeholder="请输入姓氏" v-model="user.firstName"><br/>
    名字： <input type="text" placeholder="请输入名字" v-model="user.lastName"><br/>
    年龄： <input type="text" placeholder="请输入年龄" v-model="user.wife.age"><br/>
  </fieldset>
  <fieldset>
    <legend>计算属性和监视的演示</legend>
    全名： <input type="text" placeholder="请输入姓氏" v-model="fullName"><br/>
    全名： <input type="text" placeholder="请输入名字" v-model="fullName2"><br/>
    全名： <input type="text" placeholder="请输入名字" v-model="fullName3"><br/>
  </fieldset>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  computed,
  watch,
  watchEffect
} from 'vue';
import HellO from './components/Hello.vue'

export default defineComponent({
  name: 'App',
  components: {
    HellO
  },
  props: {
    msg: String
  },
  setup(props, context) {
    console.log('setup', props, context)
    let count = 0
    let count2 = ref(0)
    let cc = reactive({
      a: 1,
      b: 'b',
      c: [3,4]
    })
    function updateCount(p: string) {
      // console.log(count, p)
      // count++
      count2.value++
      // cc.a = 11
      // cc.b = 'bb'
      // cc.c.push(5)
    }

    const user = reactive({
      firstName: '张',
      lastName: '捷',
      wife: {
        age: 2
      }
    })
    const fullName = computed(() => { // 传入一个回调函数，则是get操作
      return user.firstName + '-' + user.lastName
    })
    const fullName2 = computed({
      get() {
        return user.firstName + '-' + user.lastName
      },
      set(val: string) {
        // console.log(2222, val)
        const names = val.split('-')
        user.firstName = names[0]
        user.lastName = names[1]
      }
    })

    // 监听，watch
    const fullName3 = ref('')
    watch(user, (val) => {
      fullName3.value = val.firstName + val.lastName
    }, {
      immediate: true, // 默认初始化就立即执行一次
      deep: true
    })
    // 监听，不需要配置immediate,本身默认就会进行监视
    watchEffect(() => {
      fullName3.value = user.wife.age.toString()
    })

    return {
      count,
      count2,
      cc,
      updateCount,

      user,
      fullName,
      fullName2,
      fullName3
    }
  },
  beforeCreate() {
    // console.log('beforeCreate')
  }
});
</script>

