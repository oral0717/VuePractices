<template>
  <div @click="updateCountX">{{msg}}</div>
</template>

<script lang="ts">
import { defineComponent} from 'vue'
export default defineComponent({
  name: 'HellO',
  props: {
    msg: String
  },
  setup(props, context) {
    console.log(1111,props, context.attrs)
    function updateCountX() {
      context.emit('updateCount', '77')
    }
    return {
      updateCountX
    }
  },
})
</script>