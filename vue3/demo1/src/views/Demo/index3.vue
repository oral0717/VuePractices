<template>
  <div class="about">
    <!-- <div class="loadding">
        <img src="img/load2.gif">
    </div> -->

    <!-- 画布 -->
    <div class="container">{{count}}</div>

    <!-- 标签 -->
    <div id="label"></div>
  </div>
</template>
<script>
  import { ref, reactive } from 'vue'

  export default {
    setup() {
      const count = ref(0)
      const object = reactive({ foo: 'bar' })

      // 暴露到template中
      return {
        count,
        object
      }
    }
  }
</script>
