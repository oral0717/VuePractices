<template>
  <div>xx{{count}}</div>
  <div>xx{{count2}}</div>
  <div>cc{{cc.a}} {{cc.b}} {{cc.c.join(',')}}</div>
  <!-- <div @click="updateCount">更新数据</div> -->
  <HellO msg="xxx" msg2="yyy" @updateCount="updateCount"/>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive
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
      console.log(count, p)
      // count++
      count2.value++
      // cc.a = 11
      // cc.b = 'bb'
      // cc.c.push(5)
    }
    return {
      count,
      count2,
      cc,
      updateCount
    }
  },
  beforeCreate() {
    console.log('beforeCreate')
  }
});
</script>

